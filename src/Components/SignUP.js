import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Formik , Form , Field , ErrorMessage} from "formik";
import * as  Yup from "yup";

const SignUP = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    console.log("values")
    navigate("/SignIn");
  };
  const paperStyle = {padding: "25px 30px", width: 300, margin: " auto",backgroundColor: "",};
  const avatarStyle = { backgroundColor: "#f00ff0" };
  const headerStyle = { margin: 0 };
  const textFieldst = { margin: "8px 0px 6px" };
  const button = { margin: "6px 0px 6px  " };


  
  const initialValues = {
    firstname :" " ,
    lastname : " " ,
    email :" " ,
    password :" " ,
    confirmpassword : " "
}
 
const validationSchema = Yup.object().shape( {
    firstname :Yup.string().required("Required") ,
    lastname :Yup.string().required("Required") ,
     email : Yup.string().email("please enter valid email").required("Required") ,
     password : Yup.string().required("Required") ,
     confirmpassword :Yup.string().required("Same as password")
}

)

 const onSubmit =(values , props ) => {
   console.log (values)
   props.resetForm()
   console.log (props)
 }

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
        <Formik initialValues = {initialValues} onSubmit = {onSubmit} validationSchema = {validationSchema}>  
           {(props) => (
           <Form>
          
          <Field as ={TextField}
          type="text"
            fullWidth
            label="FirstName"
            name="firstname"
            placeholder="Enter Your FirstName"
            helperText={<ErrorMessage name="firstname"/>}
            style={textFieldst}
          />
          <TextField
          type="text"
            fullWidth
            label="LastName"
            name="lastname"
            placeholder="Enter Your LastName"
            helperText={<ErrorMessage name="lastname"/>}
            style={textFieldst}
          />
          <TextField
            type="email"
            fullWidth
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            helperText={<ErrorMessage name="email"/>}
            style={textFieldst}
            required
          />
          <TextField
           type="password"
            fullWidth
            label="Password"
            name="password"
            placeholder="Enter password"
            helperText={<ErrorMessage name="password"/>}
            style={textFieldst}
          />
          <TextField
            type="password"
            fullWidth
            label="Confirm Password"
            name="confirmpassword"
            placeholder="confirm password"
            helperText={<ErrorMessage name="confirmpassword"/>}
            required
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
        </Form>
           
           )}
           </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUP;