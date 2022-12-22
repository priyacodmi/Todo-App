
import Input from "./Input";
import { TodosList } from "./TodoList";
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTodo, deleteTodo, getAllTodos, updateTodoStatus, updateTodoTitle } from "../redux/action";


export const Todo=()=>{
const todos=useSelector(state=>state.todos);
  const dispatch=useDispatch();

  const handleSubmit=(e,todo)=>{
    e.preventDefault();
    dispatch(addTodo(todo));
  }

  const handleDelete=(id)=>{
    dispatch(deleteTodo(id));
  }

  const handleUpdateStatus=(id,status)=>{
    dispatch(updateTodoStatus(id,status));
  }

  const handleUpdateTitle=(id,title)=>{
    dispatch(updateTodoTitle(id,title));
  }

  useEffect(()=>{
      dispatch(getAllTodos(todos));
  },[dispatch,todos.length]);

    return(
        <>
          <Input handleSubmit={handleSubmit}/>
          <div style={{width:"70%", margin:"auto", marginTop:"50px"}}>
         <TableContainer component={Paper} style={{width:"80%", margin:"auto"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">
              Todo Title
            </TableCell>
            <TableCell>
              Start Time
            </TableCell> 
            <TableCell>
              End Time
            </TableCell>
            <TableCell>
              Duration
            </TableCell>
            <TableCell>
              Status
            </TableCell>
            <TableCell>
              Update
            </TableCell>
            <TableCell>
              Delete
            </TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo,ind)=>
           <TodosList key={ind} props={{ todo, handleDelete, handleUpdateStatus, handleUpdateTitle }}/>
          )}
        </TableBody>   
      </Table>
    </TableContainer>
    </div>
        </>
    )
}
