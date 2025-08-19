import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import ModalExpense from "../../components/ModalExpense";
import ExpensesMain from "../Expenses/ExpensesMain";

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box
      width="100%"
      height={"100vh"}
      sx={{ background: "#ADBBDA" }}
    >
      <Navbar setOpen={setOpen} />
      <ModalExpense open={open} setOpen={setOpen} />

      <ExpensesMain />
    </Box>
  );
};

export default Dashboard;
