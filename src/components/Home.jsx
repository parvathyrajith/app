import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
    

const Home = () => {
    var[user,setuser]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setuser(response.data); 
          } catch (error) {
            console.error("Error fetching data:", error); 
          }
        };
    
        fetchData();
      }, []); 
   
  return (
    <div>
        <br /><br />
<TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TItle</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val) => {
                return (
                    <TableRow>
                         <TableCell>{val.id}</TableCell>
                         <TableCell>{val.title}</TableCell>
                    </TableRow>
                )
            }
        )}
                    </TableBody>
                    </Table>
                    </TableContainer>
    </div>
  )
}


export default Home