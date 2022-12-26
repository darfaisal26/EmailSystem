import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import {LOGIN } from "../GraphQl/Login";
import { useMutation } from "@apollo/client";

 

const Login = () => {
  let navigate = useNavigate();
    const initialValues = {
      email: "",
      password: "",
     
    };
   
    const [Login, setLogin] = useState(initialValues);
    const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log("value", value, "event", event.target.name, "name", name);
    setLogin({
      ...Login,
      [name]: value,
    })
   
  };
  const [login] = useMutation(LOGIN);
  
  const handleClick = () => {
    navigate("/Register");
  };

  const styles={
    paperStyle:  {padding: "25px 30px", width: 300, height:'' ,margin: " auto",backgroundColor: "",},
    avatarStyle :{ backgroundColor: "red" },
    headerStyle : { margin: 0 },
    textFieldst : { margin: "8px 0px 6px" },
    button : { margin: "6px 0px 6px  " },
    main:{backgroundColor:"#42427a" ,height:"100vh",padding:'45px'}
  }

  return (
    <Grid  style={styles.main}>
      <Paper elevation={20} style={styles.paperStyle} >
        <Grid align="center">
          <Avatar style={styles.avatarStyle}>
            < LockOutlinedIcon/>
          </Avatar>
          <h2 style={ styles.headerStyle}>Sign IN</h2>
          <Typography variant="caption" style={{color:"mediumorchid",fontSize:'14px'}}>
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
        
          <TextField
            type="email"
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
            style={styles.textFieldst}
            required
            value={Login.email}
            onChange={changeHandler}
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
            style={styles.textFieldst}
            value={Login.password}
            onChange={changeHandler}
          />
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.button}
            
            onClick={() => {
              login({
                variables: {
                  email: Login.email,
                  password: Login.password,
                },
              });
            }}
          >
            LogIn
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.button}
            onClick={handleClick}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
