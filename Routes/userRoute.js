import express from 'express';
import {createUserController,getAllUserController,updateUserPasswordController,deleteUserController} from "../Controller/userController.js";

const userRoute = express.Router(); // post put get delete

userRoute.post('/signup', createUserController)
userRoute.get('/getusers', getAllUserController)
userRoute.put('/updatepass/:id', updateUserPasswordController)
userRoute.delete('/deleteuser/:id', deleteUserController)

export default userRoute;

