import { Router } from 'express';
const authController = Router();
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
authController.post('/signup', async(req , res , next)=>{
    try {
      const{ username , email, password}  = req.body
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }
      
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        if (existingUser.username === username) {
          return res.status(400).json({ error: 'Username already exists' });
        }
        if (existingUser.email === email) {
          return res.status(400).json({ error: 'Email already exists' });
        }
      }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const { password: _, ...sanitizedUser } = newUser._doc;
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.status(201).json({ user: sanitizedUser, token });
    } catch (error) {
       next(error)
    }
})


authController.post('/signin', async (req, res, next) => {
  try {
  
    const { userid, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ $or: [{ username: userid }, { email: userid }] });
    if ((!userid || !password)&& !user.lockUntil) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    console.log(user);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    if (user.lockUntil && user.lockUntil > Date.now()) {
      console.log('lock');
      const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000);
      return res.status(400).json({ error: `Account is locked for ${remainingTime} seconds`,lockUntil: user.lockUntil });
    }
    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      user.loginAttempts = (user.loginAttempts || 0) + 1;

      if (user.loginAttempts >= 3) {
        user.lockUntil = Date.now() + 3 * 60 * 1000; 
        user.loginAttempts = 0;
      }
      await user.save();
      return res.status(400).json({ error: 'Incorrect password' });
    }
    
    if (user && comparePass) {
      user.loginAttempts = 0;
      user.lockUntil = null;
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
      const { password: _, ...userData } = user._doc;
      return res.status(200).json({ user: userData, token });
    }
  } catch (error) {
    next(error);
  }
});



export default authController;