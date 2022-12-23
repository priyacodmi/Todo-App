import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '@mui/material';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Input({ handleSubmit }) {
  const [title, setTitle] = useState("");
  const [startTime,setStartTime]=useState(new Date().getTime());
  const [endTime,setEndTime]=useState(null);

  const todo = {
    title: title,
    startTime: startTime,
    endTime: endTime,
    isDone: false
  }

  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
     
        <Item><TextField
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
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        /></Item>
        <Item><LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            sx={{ mt: 2, width: '45ch' }}
            label="From Time"
            value={startTime}
    onChange={(newValue) => {
      setStartTime(newValue);
    }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider></Item>
        <Item><LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            sx={{ mt: 2, width: '45ch' }}
            label="To Time"
            value={endTime}
    onChange={(newValue) => {
      setEndTime(newValue);
    }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider></Item>
        <Item><Button onClick={()=>{
          if(title !== "" && startTime !== null){
            handleSubmit(todo);
            setTitle("");
            setStartTime(null);
            setEndTime(null);
          }
        }}
        sx={{ height:"100%"}}
        variant="contained"
        disabled={!(title && startTime)}>Add Todo</Button></Item>
        
      </Box>
    </div>
  );
}



