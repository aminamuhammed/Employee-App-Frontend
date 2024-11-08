import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>ID</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>

    </div>
  )
}

export default Home
