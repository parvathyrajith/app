import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <br /><br />
      <h2>Add Details</h2>
    <TextField label='Blog Name' varient='outlined' name='Blog Name'/><br /><br /><br />
    <TextField label='Description' varient='outlined' name='Description'/><br /><br /><br />
    <TextField label='Author' varient='outlined' name='Author'/><br /><br /><br />
    <Button variant='contained'>ADD</Button>
    </div>
  )
}

export default Add