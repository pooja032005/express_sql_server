import { connectDB } from './Db/db.js';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from './Routes/userRoute.js';
dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;
//MIDDLEWARE
app.use(express.json());
app.use(cors());
//CONNECTIVIT
connectDB()
//ROUTES DEFINITION
app.use('/api/users',userRoute);
//http://localhost:5000/api/user/signup
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

connectDB()
