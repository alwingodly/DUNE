import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userController from './controllers/userController.js';
import authController from './controllers/authController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGOOSE_PORT; 

app.listen(PORT, () => {
    console.log('Server connected - PORT ' + PORT);
});

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error: ' + err);
});

app.use('/user',userController) 
app.use('/auth',authController) 


app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})