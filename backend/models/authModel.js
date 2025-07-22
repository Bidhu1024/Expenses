import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
},{
    timeStamps:true
}
);

export const Auth = mongoose.model('Auth',authSchema)