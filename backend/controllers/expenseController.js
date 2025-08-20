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

export const getExpenses = async (req, res) => {
  try {
    const id = req.user.id;
    const expenses = await Expense.find({ user: id });

    if (!expenses || expenses.length === 0) {
      return res
        .status(404)
        .json({ message: "No expeses found for this user", success: false });
    }
    return res.status(200).json({
      data: {
        expenses,
      },
      success: true,
      count: expenses.length,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const deleteExpense = async(req,res)=>{
  try {
    const {id} = req.params;
    const deleteExpense = await Expense.findByIdAndDelete(id)

    if(!deleteExpense){
      return res.status(404).json({success:false,message:"No user found"})

    }

    return res.status(200).json({
      success:true,
      message:"Expense deleted successfully"
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  
  }
}
