import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getExpenses } from "../../api/expense";
import ExpenseCard from "./ExpenseCard";

export interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: string;
  notes: string;
  date: string;
}

const ExpensesMain = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpenses();
        console.log("API Response:", response);
        setExpenses(response.data.data.expenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <Box>
      <Typography variant="h4" textAlign={"center"}>
        My Expense
      </Typography>
      <Box sx={{display:"flex",gap:2}}>

  
      {expenses?.map((element) => (
        <ExpenseCard dataz={element} />
      ))}
          </Box>
    </Box>
  );
};

export default ExpensesMain;
