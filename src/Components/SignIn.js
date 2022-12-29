import React from "react";
import {useNavigate } from "react-router-dom";
import {useState} from "react"; 
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik , Form , Field , ErrorMessage} from "formik";
import * as  Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../Graphql/Login";



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

//   // const initialValues = {
//   //   email :" " ,
//   //   password :" " 
// }
 
const validationSchema = Yup.object().shape( {
     email : Yup.string().email("Please enter valid email").required("Email is Required") ,
     password : Yup.string().required("Password is Required")
}

)

 const onSubmit =(values , props ) => {
   console.log (values)
   
   props.resetForm()
   console.log (props)
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
        <Formik initialValues = {initialValues} onSubmit = {onSubmit} validationSchema = {validationSchema}>  
           {(props) => (
           <Form>
          
          <Field as ={TextField}
            type="email"
            fullWidth 
            label="Email"
            name="email"
            placeholder="Enter Your Email"
            helperText={<ErrorMessage name="email"/>}
            style={styles.textFieldst}
            value={Login.email}
            onChange={changeHandler}
            required

          />
          < Field as = {TextField}
           type='password'
           fullWidth 
            label='Password'
            name='password'
            placeholder='Enter password'
            helperText={<ErrorMessage name= "password"/>}
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
             onClick={handleClick}
          >
            Sign IN
          </Button>
           
        </Form> 
        )}
        </Formik>
          
        
      </Paper>
    </Grid>
  );
};

export default SignIn;
