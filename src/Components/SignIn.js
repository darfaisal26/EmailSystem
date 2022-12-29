import React from "react";
import {useNavigate } from "react-router-dom";
import {useState} from "react"; 
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {LOGIN } from "../graphql/Login";
import { useMutation } from "@apollo/client";

const SignIn = () => {
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
    console.log("values")
    navigate("/Home");
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
          <h2 style={ styles.headerStyle}>Sign IN</h2>
          <Typography variant="caption" style={{color:"mediumorchid",fontSize:'14px'}}>
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
          {/* <TextField
          type="text"
            fullWidth
            label="FirstName"
            placeholder="Enter Your FirstName"
            style={textFieldst}
          />
          <TextField
          type="text"
            fullWidth
            label="LastName"
            placeholder="Enter Your LastName"
            style={textFieldst}
          /> */}
          <TextField
            type="email"
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
            style={styles.textFieldst}
            value={Login.email}
            onChange={changeHandler}
            required

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
          {/* <TextField
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="confirm password"
            required
            style={textFieldst}
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.button}
             onClick={handleClick}
          >
            Sign IN
          </Button>

          
        </form>
      </Paper>
    </Grid>
  );
};

export default SignIn;
