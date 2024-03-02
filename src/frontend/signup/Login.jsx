import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Button, Container, Paper, TextField, Toolbar, Typography } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Validate email format and password length
    if (!isValidEmail(email) || password.length < 8) {
      alert("Invalid email or password (password must be at least 8 characters long)");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/login", {
        email,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect to desired page after successful login
        navigate("/nexttype");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while logging in");
    }
  }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    
    <div style={{ backgroundColor: '#3b566f', height: '100vh' }}>
      <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        worker and client
      </Typography>
    </Toolbar>
  </AppBar>
  <br></br>
    <Container component="main" maxWidth="xs">
      
    
  
     <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h4">Login</Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          // value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          // value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={submit}
          style={{ marginTop: 16 }}
        >
          Login
        </Button>
        <Link to="/signup">Signup Page</Link>
      </Paper>
    </Container>
     
    </div>
    
  );
}

export default Login;
