import React,{useState} from 'react'
import Header from './Header';
import { Container,Paper, Box, Grid, TextField, IconButton,Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';






const Users = () => {

  const userTemplate={name:"", email: "" , mobilenumber:""};
  const[users,setUsers]=useState([userTemplate]);
  const addUser=()=>{
    setUsers([...users,userTemplate]);
  };
    const onChange =(e,index)=>
    {
     const updatedUsers =users.map((user,i)=> index ===i ? Object.assign(user,{[e.target.name]: e.target.value})
      :user) ;
      setUsers(updatedUsers);
    };
    

    
  
  return ( 
    <> 
<Header/>    
<Container >
  <Paper component={Box} p={4} marginTop={10}>
    {
      users.map((user,index)=>(
        <Grid container spacing={4}  key={index}> 
    <Grid item md={3}><TextField
    label="Name"
    placeholder="Enter Name"
    variant="outlined"
    name='name'
    onChange={e=> onChange(e,index)}
    value={user.name}
    fullWidth/> 
    </Grid> 
    <Grid item md={3}>
      <TextField
      type="email"
    label="Email"
    placeholder="Enter Email ID"
    variant="outlined"
    name='email'
    onChange={e=> onChange(e,index)}
    value={user.email}
    fullWidth/> 
    </Grid> 
    <Grid item md={3}><TextField
    label="Mobile Number"
    placeholder="Enter Mobile Number"
    variant="outlined"
    name='mobilenumber'
    onChange={e=> onChange(e,index)}
    value={user.mobilenumber}
    fullWidth/> 
    </Grid> 
    <Grid item md={1}>
      <IconButton color="error" >
      <DeleteOutlineIcon />
      </IconButton>
    </Grid> 
    <Grid item md={1}>
      <IconButton color="primary" >
      <MailOutlinedIcon/>
      </IconButton>
    </Grid> 
    </Grid>
      ))
    }
    <Button variant="contained"   onClick={addUser}  >  
    ADD MORE USER</Button>
      </Paper>
      </Container>
    </>

  )
}

export default Users















































































































/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, firstname, lastname, email, username) {
  return { id, firstname, lastname, email, username };
}

const rows = [
  createData(),
  createData(),
  createData(),
  
];

export default function CustomizedTables() {
  return (<>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.firstname}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
/*import React from 'react'
import Header from './Header'

const Users = () => {
  return (
    <>
    <Header/>
    
    <h2>..</h2>
    <h3>RegisteredUsers</h3>  
    </>
  )
}

export default Users
*/