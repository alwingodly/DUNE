import { Router } from 'express';
const userController = Router();

userController.get('/',  async(req , res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

export default userController;