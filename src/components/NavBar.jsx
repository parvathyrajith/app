import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
     <div>
              <AppBar color='primary'>
                  <Toolbar>
                      <Typography variant='h3'>DASHBOARD</Typography>&nbsp;&nbsp;
                      <Link to='/home'>
                      <Button variant='contained' color='secondary'>Home </Button>
                      </Link>&nbsp;&nbsp;
                      <Link to='/add'>
                      <Button variant='contained' color='secondary'>Add details</Button>
                      </Link>&nbsp;&nbsp;
                     
                  </Toolbar>
              </AppBar>
          </div>
        )
      }
    

export default NavBar