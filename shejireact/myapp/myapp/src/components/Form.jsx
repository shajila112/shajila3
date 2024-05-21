
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const Form = () => {
  return (
    <div>
        <br></br><br></br><br></br>
        <Typography variant="h3">add blog</Typography>
        <TextField id="outlined basics" label="blogname" variant="outlined"></TextField> <br></br>
        <TextField id="outlined basics" label="description" variant="outlined"></TextField><br></br>
        <TextField id="outlined basics" label="authorname" variant="outlined"></TextField><br></br>
        <Button varianr="contained">submit</Button>
    </div>
  )
}
