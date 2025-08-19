import express from "express"
import { createExpense, getExpenses } from "../controllers/expenseController.js"
import { authenticateUser } from "../middleware/auth.js"


const router = express.Router()

router.post('/create_expense',authenticateUser,createExpense)
router.get('/get_expenses/:id',authenticateUser,getExpenses)
export default router