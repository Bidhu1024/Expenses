import type { RegisterForm } from "../types/globalTypes.js";
import api from "./api.js"
export const signUp = async (userData:RegisterForm)=>{
    const response = await api.post('/auth/signup',userData);
    console.log(`response ${response}`)
    return response
}