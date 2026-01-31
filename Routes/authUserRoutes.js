import express from 'express'
import { protect } from '../middleware/protect.js'
import { isAdmin } from '../middleware/admin.js'
import { authSignUp,authLogin} from '../Controller/authUserController.js'
const authUserRoute = express.Router()
authUserRoute.post('/authsign',authSignUp)
authUserRoute.post('/authlogin',authLogin)
authUserRoute.get("/profile",protect, (req,res) => {
    res.json ({
        message:"This is protected profile",
        user: req.role
    })
})
authUserRoute.get('/admin',protect,isAdmin, (req,res) => {
    res.json ({
        message: "welcome admin user",
        user: req.role
    })
})
export default authUserRoute