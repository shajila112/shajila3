import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Viewdata = () => {
    var[users,setusers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setusers(response.data)
        },[])
    })
return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userid</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>body</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.userid}</TableCell>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>{val.body}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
