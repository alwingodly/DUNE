import { Router } from 'express';
const authController = Router();
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';


const validateSignUp = [
  check('username').not().isEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Invalid email format'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/\d/)
    .withMessage('Password must contain at least one number')
    .matches(/[!@#\$%\^&\*]/)
    .withMessage('Password must contain at least one special character'),
];


authController.post('/signup', validateSignUp,  async(req , res , next)=>{
    try {
      const{ username , email, password}  = req.body
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
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

authController.post('/login', validateSignUp,  async(req , res , next)=>{
  try {
   
  } catch (error) {
     next(error)
  }
})
export default authController;