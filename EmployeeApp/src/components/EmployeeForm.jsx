import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { TextField } from '@mui/material';



const EmployeeForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%',width:'50%', marginLeft:'20%'}}>
    <Grid container spacing={2}>
      <Grid size={12}>
      <TextField fullWidth id="outlined-basic" label="Name" variant="filled" />
      </Grid>
      <Grid size={12}>
      <TextField fullWidth id="outlined-basic" label="Designation" variant="filled" />
      </Grid>
      <Grid size={12}>
      <TextField fullWidth id="outlined-basic" label="Location" variant="filled" />
      </Grid>
      <Grid size={12}>
      <TextField fullWidth id="outlined-basic" label="Salary" variant="filled" />
      </Grid>
    </Grid>
  </Box>
  )
}

export default EmployeeForm
