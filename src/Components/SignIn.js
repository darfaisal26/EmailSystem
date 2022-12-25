import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../styles/Style.css';

const SignIn = () => {
  let navigate = useNavigate();
  const handleClick = () => {
  //   console.log("values")
    navigate("/SignUp");
  };

  // const styles={
  //   paperStyle:  {padding: "25px 30px", width: 300, height:'' ,margin: " auto",backgroundColor: "",},
  //   avatarStyle :{ backgroundColor: "#f00ff0" },
  //   headerStyle : { margin: 0 },
  //   textFieldst : { margin: "8px 0px 6px" },
  //   button : { margin: "6px 0px 6px  " },
  //   main:{backgroundColor:"#42427a" ,height:"100vh",padding:'45px'}
  // }

  return (
    <Grid  className='main'>
      <Paper elevation={20}  className='paperStyle' >
        <Grid align="center">
          <Avatar className='avatarStyle'>
            < LockOutlinedIcon/>
          </Avatar>
          <h2 className='headerStyle' >Sign IN</h2>
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
            
            className='textFieldst'
            required
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
            
            className='textFieldst'
          />
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            
            className='button'
            // onClick={handleClick}
          >
            Sign IN
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          
            className='button'
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignIn;
