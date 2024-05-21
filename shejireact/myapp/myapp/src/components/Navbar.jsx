import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h3">welcome to blog</Typography>&nbsp;
                <Button variant="contained">
                    <Link to='/f'>homepage</Link></Button>
                <Button variant="contained">
                    <Link to='/r'>add blog</Link></Button>
                   
            </Toolbar>
        </AppBar>
    </div>
  )
}
