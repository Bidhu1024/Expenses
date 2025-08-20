import express from "express"
import { createExpense, deleteExpense, getExpenses } from "../controllers/expenseController.js"
import { authenticateUser } from "../middleware/auth.js"


const router = express.Router()

router.post('/create_expense',authenticateUser,createExpense)
router.get('/get_expenses',authenticateUser,getExpenses)
router.delete('/delete/:id',authenticateUser,deleteExpense)
export default router