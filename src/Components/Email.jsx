import React from 'react'
import { Typography , Button,Grid,TextField,Paper,} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Header from './Header';

const Email = () => {
  const styles={
    paperStyle:  {padding: "30px 30px", width: 1000, height:410 ,margin: " auto",backgroundColor: "", marginTop:40,},
  
    
    textFields : { margin: "8px 0px 6px" },
    button : { margin: "6px 0px 6px  " },
    main:{backgroundColor:"#42427a" ,height:"100vh",padding:'55px'}
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

        <form>
          
          <TextField
            type="Email"
           label="Email"
            placeholder="Recipients"
            style={styles.textFields}
            required
            fullWidth
          />
          <TextField
           type="textfield"
            fullWidth
            label="Subject"
            placeholder="Subject"
            style={styles.textFields}
            required
          />
           <TextField
            multiline
            rows={4}
            type="textfield"
            fullWidth
            label="Message"
            placeholder="Message"
            required
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
          
        </form>
      </Paper>
    </Grid>
    
  
    </>
  )
}

export default Email