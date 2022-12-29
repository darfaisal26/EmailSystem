import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Formik , Form , Field , ErrorMessage} from "formik";
import * as  Yup from "yup";

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
     email : Yup.string().email("please enter valid email").required("Email is Required") ,
     password : Yup.string().required("Password is mendatory").min(3,"Password must be 3 char long") ,
     confirmpassword :Yup.string().required("Password is mendatory").oneOf([Yup.ref('password')],'Passwords does not match') 
})

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
          <Typography variant="caption" style={{fontSize:'14px'}}>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <Formik initialValues = {initialValues} onSubmit = {onSubmit} validationSchema = {validationSchema}>  
           {(props) => (
           <Form>
          
          <Field as ={TextField}
          type="text"
            fullWidth
            label="First Name"
            placeholder="Enter Your FirstName"
            helperText={<ErrorMessage name="firstname"/>}
            style={textFieldst}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            name="confirmpassword"
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
        </Form>
           
           )}
           </Formik>

      </Paper>
    </Grid>
  );
};

export default SignUP;
