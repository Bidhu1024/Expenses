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
        minHeight: "3.5rem", // Increased height or use minHeight
        px: 3,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2196f3", // Optional attractive bg
        color: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Expense
      </Typography>
      <Box>
        <Button >
            Add Expense
        </Button>
      <LogoutIcon onClick={handleLogout} sx={{ cursor: "pointer" }} />
      </Box>

    </Box>
  );
};

export default Navbar;
