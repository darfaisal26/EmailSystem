import React from 'react'
import {Link,useNavigate } from "react-router-dom";
import { Typography ,AppBar, Toolbar, Tab, Tabs, Button} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const Header = () => {
  const navigate=useNavigate();
    const gotonext= ()=>{
      navigate("/SignIn");}
      
      
  return (
    <> 
    <AppBar sx={{background:"#063970"}}> <Typography>
      <Toolbar>
        <EmailIcon fontSize="large"  />
        
       <Tabs  sx={{marginLeft:"auto"}}textColor=''>
      
<Tab icon={<MailOutlineOutlinedIcon  />}              label="Email" to="/Email" component={Link} />
<Tab icon={<GroupsIcon />}      label="Registered Users" to="/Users" component={Link}/>
<Tab icon={<HomeIcon/>}                   label="Home"  to="/Home" component={Link}               />
<Tab icon={<ContactPhoneIcon />}                 label="Contact Us" to="/contactus" component={Link}/>
       </Tabs>
<Button onClick={()=>{
      gotonext()}} sx={{marginLeft:"auto"}} variant="contained" endIcon={<LogoutIcon />}>
  log out
</Button>
        
      </Toolbar>
      </Typography></AppBar>
     
      

    </>
  )
}

export default Header