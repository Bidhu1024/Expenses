import { Expense } from "../models/expenseModel.js";
export const createExpense = async (req, res) => {
  try {
    const { amount, title, category, notes, date } = req.body;

    if (!title || !amount || !category || !notes || !date) {
      return res.status(400).json({
        success: false,
        msg: "Params missing",
      });
    }

    const newExpense = await Expense.create({
      title,
      amount,
      category,
      notes,
      date,
      user: req.user.id,
    });
    return res.status(201).json({
      message: "Success",
      success: true,
      expense: {
        title: newExpense.title,
        amount: newExpense.amount,
        category: newExpense.category,
        date: newExpense.date,
        notes: newExpense.notes,
        user: req.user.id,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
};
