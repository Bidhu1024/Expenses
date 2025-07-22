import { Auth } from "../models/authModel.js";
import bcrypt from "bcryptjs"
export const signupUser = async(req,res)=>{
    try {
        const {name,phone,email,password} = req.body;
        if(!name || !phone || !email || password){
            return res.status(400).json({message:"Params Missing", success:false})
        }

        const validEmail = await Auth.findOne({email});
        if(validEmail){
            return res.status(409).json({message:"User Already Exists", success:false})
        }
        const salt = await bcrypt.getSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = await Auth.create({
            name,
            email,
            phone,
            password:hashedPassword
        })

        res.status(201).json({message:"Success", success:true,user:{
            name:newUser.name,
            phone:newUser.phone,
            email:newUser.email,
            id:newUser._id,
        }})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error"})
    }

}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).json({success:false,message:"Params missing"});
        }
        const user = await Auth.findOne({email});
        if(!user){
            res.status(400).json({message:"User not found", success:false})
        }
        const passwordCheck = await bcrypt.compare(password,user.password)
        if(!passwordCheck){
            res.status(400).json({message:"User not found", success:false})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"10d"
        })
        res.status(200).json({
            token,
            user:{
                name:user.name,
                phone:user.phone,
                id:user._id,
                email:user.email
            }
        })
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server Error"})
    }
}