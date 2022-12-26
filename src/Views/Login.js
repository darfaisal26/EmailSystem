import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  let navigate = useNavigate();
  const handleClick = () => {
     navigate("/Register");
  };

  const styles={
    paperStyle:  {padding: "25px 30px", width: 300, height:'' ,margin: " auto",backgroundColor: "",},
    avatarStyle :{ backgroundColor: "#f00ff0" },
    headerStyle : { margin: 0 },
    textFieldst : { margin: "8px 0px 6px" },
    button : { margin: "6px 0px 6px  " },
    main:{backgroundColor:"#42427a" ,height:"100vh",padding:'45px'}
  }

  return (
    <Grid  style={styles.main}>
      <Paper elevation={20} style={styles.paperStyle} >
        <Grid align="center">
          <Avatar style={ styles.avatarStyle}>
            < LockOutlinedIcon/>
          </Avatar>
          <h2 style={ styles.headerStyle}>Login</h2>
          <Typography variant="h4" style={{color:"",fontSize:'14px'}}>
            Enter your Details 
          </Typography>
        </Grid>

        <form>
        
          <TextField
            type="email"
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
            style={styles.textFieldst}
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
            style={styles.textFieldst}
          />
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.button}
            
          >
            Login
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
