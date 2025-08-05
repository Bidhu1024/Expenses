import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  amount: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  date: {
    required: true,
    type: String,
  },
  notes: {
    type: String,
    required: true,
  },
  user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
}
});
export const Expense = mongoose.model("Expense", expenseSchema);
