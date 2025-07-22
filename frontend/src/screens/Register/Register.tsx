import background from "../../assets/backgroundlogin.jpg";
import { SiGnuprivacyguard } from "react-icons/si";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { RegisterForm } from "../../types/globalTypes";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [register, setRegister] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "24rem",
          borderRadius: 3,
          bgcolor: "rgba(255,255,255,0.85)",
          boxShadow: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#1976d2",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <SiGnuprivacyguard color="#fff" />
        </Box>

        <Typography fontWeight={600} fontSize="1.25rem" textAlign="center">
          Register to have an account
        </Typography>

        <Typography fontSize="0.9rem" textAlign="center" color="text.secondary">
          This website helps you to manage your expnses on daily basis.
        </Typography>
        <TextField
          label="Name"
          placeholder="Enter your Name"
          size="small"
          fullWidth
          value={register.name}
          onChange={(e) => setRegister({ ...register, name: e.target.value })}
        />
        <TextField
          label="Email"
          placeholder="Enter your email"
          size="small"
          fullWidth
          value={register.email}
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />
        <TextField
          label="Phone"
          placeholder="Enter your Phone Number"
          size="small"
          fullWidth
          value={register.phone}
          onChange={(e) => setRegister({ ...register, phone: e.target.value })}
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          size="small"
          fullWidth
          value={register.password}
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
        />

        <Button variant="contained" fullWidth sx={{ mt: 1, fontWeight: 600 }}>
          Register
        </Button>

        <Typography textAlign="center" fontSize="0.875rem">
          Already have an account
          <span
            style={{ color: "#1976d2", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/")}
          >
            {"  "} Login
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
