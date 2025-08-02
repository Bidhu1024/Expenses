import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <Box
      width="100%"
      height={"100vh"}
      sx={{ background: "linear-gradient(to bottom, #f9f9f9, #e0f7fa)" }}
    >
      <Navbar />
    </Box>
  );
};

export default Dashboard;
