import { Auth } from "../models/authModel";
import bycrypt from "bycryptjs"
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
        const salt = await bycrypt.getSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt)

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