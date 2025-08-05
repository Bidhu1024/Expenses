import express from "express"
import { createExpense } from "../controllers/expenseController"
import { authenticateUser } from "../middleware/auth"


const router = express.Router()

router.post('/create_expense',authenticateUser,createExpense)