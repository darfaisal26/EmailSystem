import React from "react";
import { useNavigate } from "react-router-dom";
import {Avatar,Grid,Paper,TextField,Typography,Button,} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik , Form , Field , ErrorMessage} from "formik";
import * as  Yup from "yup";

const Login = () => {
  let navigate = useNavigate();
  const handleClick = () => {
// <<<<<<< HEAD:src/Views/Login.js
     navigate("/Register");
// =======
    // console.log("values")
    // navigate("/SignUp");
// >>>>>>> origin/Asifa:src/Components/SignIn.js
  };

  const styles={
    paperStyle:  {padding: "25px 30px", width: 300, height:'' ,margin: " auto",backgroundColor: "",},
    avatarStyle :{ backgroundColor: "#f00ff0" },
    headerStyle : { margin: 0 },
    textFieldst : { margin: "8px 0px 6px" },
    button : { margin: "6px 0px 6px  " },
    main:{backgroundColor:"#42427a" ,height:"100vh",padding:'45px'}
  }

  const initialValues = {
      email :" " ,
      password :" " 
  }
   
  const validationSchema = Yup.object().shape( {
       email : Yup.string().email("please enter valid email").required("Required") ,
       password : Yup.string().required("Required")
  }

  )

   const onSubmit =(values , props ) => {
     console.log (values)
     {/*setTimeout(() => {
         props.resetForm()
         props.setSubmitting(true)   
    },2000 ) */}
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
          <h2 style={ styles.headerStyle}>Login</h2>
          <Typography variant="h4" style={{color:"",fontSize:'14px'}}>
            Enter your Details 
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
          />
          < Field as = {TextField}
           type='password'
           fullWidth 
            label='Password'
            name='password'
            placeholder='Enter password'
            helperText={<ErrorMessage name= "password"/>}
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
        </Form> 
        )}
        </Formik>

      </Paper>
    </Grid>
  );
// <<<<<<< HEAD:src/Views/Login.js
};

export default Login;
// =======
           
           
// export default SignIn;
// >>>>>>> origin/Asifa:src/Components/SignIn.js
