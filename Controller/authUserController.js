import { hashpassword,passwordCheck } from '../utils/hash.js';
import { createToken } from '../utils/token.js';    
import AuthUserModel from '../Model/authUserModel.js'

export const authSignUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const checkEmail = await AuthUserModel.userLoginModel(email)
        if(checkEmail){
            return res.status(400).json({message:"Email already exists"})
        }
        const newPassword = await hashpassword(password)
        const id = await AuthUserModel.userSignupModel(
            { 
                name:name,
                email:email,
                password: newPassword, 
                role:role || "user"
            })
            res.status(201).json({
                message:"User created successfully",
                userId: id

        })
           
    } catch (err) {
         res.status(500).json({ error: err.message })
    }
}
export const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const checkEmail = await AuthUserModel.userLoginModel(email);
        if(!checkEmail){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const passwordCheck = await passwordCheck(password,user.password);
        if(!passwordCheck){
            return res.status(400).json({message:"Wrong Password"})
        }
        const token = createToken({
            id: user.id,
            role: user.role
        })
        res.status(200).json({ message:"Login successful",token})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}