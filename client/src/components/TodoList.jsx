import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodosList = ({props}) => {
  const { todo, handleDelete, handleUpdateStatus, handleUpdateTitle } =props;
  return (
    <TableRow key={todo._id}>
    <TableCell component="th">
      {todo.title}
    </TableCell>
    <TableCell>
      {todo.startTime}
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
    <Button variant="outlined" onClick={()=>handleUpdateTitle(todo._id, todo.title)} startIcon={<EditIcon />}/>
    </TableCell>
    <TableCell>
    <Button variant="outlined" onClick={()=>{handleDelete(todo._id)}}  startIcon={<DeleteIcon />}/>
    </TableCell> 
  </TableRow>
  )
}