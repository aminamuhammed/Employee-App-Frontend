import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Dashboard
        </Typography>
        <Link to={'/'} style={{color:'white'}}><Button color="inherit">Home</Button></Link>
        <Link to={'/eform'} style={{color:'white'}}><Button color="inherit">EmployeeForm</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}

export default Navbar
