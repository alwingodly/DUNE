import { Router } from 'express';
const authController = Router();
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';





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
    res.status(201).json(sanitizedUser);
    } catch (error) {
       next(error)
    }
})

authController.post('/login',  async(req , res , next)=>{
  try {
   
  } catch (error) {
     next(error)
  }
})
export default authController;