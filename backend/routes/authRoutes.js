import express from "express"
import { login, signupUser } from "../controllers/authController.js"
const router = express.Router()


router.post('/signup',signupUser)
router.post('/login',login)

export default router