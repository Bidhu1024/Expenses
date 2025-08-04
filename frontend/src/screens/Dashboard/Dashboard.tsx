import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <Box
      width="100%"
      height={"100vh"}
      sx={{ background: "#191970" }}
    >
      <Navbar />
    </Box>
  );
};

export default Dashboard;
