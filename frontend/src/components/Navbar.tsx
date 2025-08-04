import { Box, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    navigate("/"); // redirect to login
  };
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "3.5rem", 
        px: 3,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5DC",
        color: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600,color:"darkred" }}>
        Expense
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Button variant="outlined" sx={{bgcolor:"white", color:"blue"}}>Add Expense</Button>
        <LogoutIcon onClick={handleLogout}  sx={{ cursor: "pointer",color:"blue" }} />
      </Box>
    </Box>
  );
};

export default Navbar;
