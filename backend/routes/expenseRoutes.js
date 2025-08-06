import express from "express"
import { createExpense } from "../controllers/expenseController.js"
import { authenticateUser } from "../middleware/auth.js"


const router = express.Router()

router.post('/create_expense',authenticateUser,createExpense)
export default router