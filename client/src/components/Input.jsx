import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function Input({handleSubmit}) {
  const [todo,setTodo]=React.useState("");

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"

      onSubmit={(e)=>{
        handleSubmit(e,todo);
        setTodo("");
      }}
    >
      <TextField
      sx={{mt:2, width: '45ch'}}
        id="input-with-icon-textfield"
        label="Add your todo here..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PostAddIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        name="title"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
    </Box>
  );
}


