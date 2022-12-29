import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useState } from "react";
import { Register} from "../Graphql/Register";
import { useMutation } from "@apollo/client";
const SignUP = () => {
  let navigate = useNavigate();
  const initialValues = {
  
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [register, setRegister] = useState(initialValues);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(useNavigate)
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const [registerUser] = useMutation(Register)
  const submitHandler = async (event) => {
    
     registerUser({
           variables: {
          
             firstName: register.firstName,
             lastName: register.lastName,
             email: register.email,
             password: register.password,
             confirmPassword: register.confirmPassword,
           },

        }); 
        console.log("message")
      }
  const handleClick = () => {
    console.log("values")
    navigate("/SignIn");
  };
  const paperStyle = {padding: "25px 30px", width: 300, margin: " auto",backgroundColor: "",};
  const avatarStyle = { backgroundColor: "#f00ff0" };
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
          <Typography variant="caption" style={{color:"mediumorchid",fontSize:'14px'}}>
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
          <TextField
          type="text"
            fullWidth
            label="FirstName"
            placeholder="Enter Your FirstName"
            style={textFieldst}
            value={register.firstName}
            onChange={changeHandler}
          />
          <TextField
          type="text"
            fullWidth
            label="LastName"
            placeholder="Enter Your LastName"
            style={textFieldst}
            value={register.lastName}
            onChange={changeHandler}
          />
          <TextField
            type="email"
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
            style={textFieldst}
            required
            value={register.email}
            onChange={changeHandler}
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
            style={textFieldst}
            value={register.password}
            onChange={changeHandler}
          />
          <TextField
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="confirm password"
            required
            style={textFieldst}
            value={register.confirmPassword}
            onChange={changeHandler}
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
