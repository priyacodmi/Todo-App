import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';


export const TodosList = ({props}) => {
  const [open, setOpen] = useState(false);
  const [updateTitle,setUpdateTitle]=useState('')
  const { todo, handleDelete, handleUpdateStatus, handleUpdateTitle } =props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange=(e)=>{
    setUpdateTitle(e.target.value)
  }

  return (
    <TableRow key={todo._id}>
    <TableCell component="th">
      {todo.title}
    </TableCell>
    <TableCell>
      {moment(todo.startTime).format('LT')}
    </TableCell> 
    <TableCell>
      Not set
    </TableCell>
    <TableCell>
      Not known
    </TableCell>
    <TableCell>
    <Checkbox onClick={()=>{
      if(todo.isDone=== 'false'){
        console.log(todo.isDone)
        handleUpdateStatus(todo._id,true)
      }else{
        handleUpdateStatus(todo._id,false)
      }
    }} inputProps={{ 'aria-label': 'controlled' }}/>{todo.isDone==='true'?"Done":"Pending"}
    </TableCell>
    <TableCell>
    <Button variant="outlined" onClick={()=>handleClickOpen()} startIcon={<EditIcon />}/>
    </TableCell>
    <TableCell>
    <Button variant="outlined" onClick={()=>{handleDelete(todo._id)}}  startIcon={<DeleteIcon />}/>
    </TableCell> 
    <Dialog open={open} onClose={handleClose} style={{width:"100%"}}>
        <DialogTitle>Change Todo Title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write your todo here..."
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{
            handleUpdateTitle(todo._id, updateTitle)
            handleClose()
            }}>Update</Button>
        </DialogActions>
      </Dialog>
  </TableRow>
  )
}
