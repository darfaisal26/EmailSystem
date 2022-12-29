import React from 'react'
import { Typography , Button,Grid,TextField,Paper,} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Header from './Header';
import { Formik , Form , Field , ErrorMessage} from "formik";
import * as  Yup from "yup";

const Email = () => {
  const styles={
    paperStyle:  {padding: "30px 30px", width: 1000, height:410 ,margin: " auto",backgroundColor: "", marginTop:40,},
  
    
    textFields : { margin: "8px 0px 6px" },
    button : { margin: "6px 0px 6px  " },
    main:{backgroundColor:"#42427a" ,height:"100vh",padding:'55px'}
  }

  const initialValues = {
    email :" " ,
    subject :" " ,
    message:" "
}
 
const validationSchema = Yup.object().shape( {
     email : Yup.string().email("Please enter valid email").required("Email is Required") ,
     subject : Yup.string().required(" Required") ,
     message : Yup.string().required("Required")
}

)

 const onSubmit =(values , props ) => {
   console.log (values)
   
   props.resetForm()
   console.log (props)
 }


  
  return (
    <>
    <Header/>
    <Grid  style={styles.main}>
      <Paper elevation={20} style={styles.paperStyle} marginTop={80}   >
        <Grid align="center" >
<   EmailIcon  color="primary"
           fontSize='large'/>
          
          
          <h2 style={ styles.headerStyle}>COMPOSE EMAIL</h2>
          <Typography variant="caption" style={{color:"mediumorchid",fontSize:'14px'}}>
            
          </Typography>
        </Grid>
        <Formik initialValues = {initialValues} onSubmit = {onSubmit} validationSchema = {validationSchema}>  
           {(props) => (
        <Form>
          
          <Field as ={TextField}
            type="Email"
           label="Email"
           name="email"
            placeholder="Recipients"
            helperText={<ErrorMessage name= "email"/>}
            style={styles.textFields}
            required
            fullWidth
          />
          <Field as ={TextField}
           type="textfield"
            fullWidth
            label="Subject"
            name="subject"
            placeholder="Subject"
            helperText={<ErrorMessage name= "subject"/>}
            style={styles.textFields}
            required
          />
           <Field as ={TextField}
            multiline
            rows={4}
            type="textfield"
            fullWidth
            label="Message"
            name="message"
            placeholder="Message"
            required
            helperText={<ErrorMessage name= "message"/>}
            style={styles.textFields1}
          /> 
          <Button
          margin="6px 0px 6px  "
            type="submit"
            variant="contained"
            color="primary"
            style={styles.button}
           endIcon={<ForwardToInboxIcon />}> 
           
            
            SEND EMAIL
          </Button>
          
        </Form>
           )}
        </Formik>
      </Paper>
    </Grid>
    
  
    </>
  )
}

export default Email