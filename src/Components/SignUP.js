import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const SignUP = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/SignIn");
  };
  const paperStyle = {padding: "25px 30px", width: 300, margin: " auto",backgroundColor: "",};
  const avatarStyle = { backgroundColor: " #292987;" };
  const headerStyle = { margin: 0 };
  const textFieldst = { margin: "8px 0px 6px" };
  const button = { margin: "6px 0px 6px  " };
  return (
    <Grid  style={{backgroundColor:"#42427a" ,height:"100vh",padding:'45px'}}>
      <Paper elevation={20} style={paperStyle} >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" style={{fontSize:'14px'}}>
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
          <TextField
          type="text"
            fullWidth
            label="First Name"
            placeholder="Enter Your FirstName"
            style={textFieldst}
          />
          <TextField
          type="text"
            fullWidth
            label="Last Name"
            placeholder="Enter Your LastName"
            style={textFieldst}
          />
          <TextField
            type="email"
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
            style={textFieldst}
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
            style={textFieldst}
          />
          <TextField
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="confirm password"
            style={textFieldst}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={button}
            onClick={handleClick}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUP;
