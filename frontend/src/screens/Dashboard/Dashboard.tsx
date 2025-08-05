import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import ModalExpense from "../../components/ModalExpense";

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box width="100%" height={"100vh"} sx={{ background: "#191970" }}>
      <Navbar setOpen={setOpen} />
      <ModalExpense open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Dashboard;
