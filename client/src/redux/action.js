import axios from "axios";
import * as types from "./action.type";


// FETCH ALL TODOS
export const getAllTodos=()=>(dispatch)=>{
  dispatch({type:types.FETCH_TODOS_REQUEST});
  return axios.get(`http://localhost:5000/api/todos/all`)
  .then((response)=>{
    return dispatch({type:types.FETCH_TODOS_SUCCESS, payload:response.data.todos})
  })
  .catch((error)=>{
    return dispatch({type:types.FETCH_TODOS_FAILURE,payload:error})
  })
}

export const fetchApiRequest=()=>{
    return{
      type:types.FETCH_TODOS_REQUEST
    }
}

export const fetchApiSucces=()=>{
  return{
    type:types.FETCH_TODOS_SUCCESS
  }
}

export const fetchApiFailure=()=>{
  return{
    type:types.FETCH_TODOS_FAILURE
  }
}



// Create Todo

export const addTodo=(todo)=>(dispatch)=>{
  let newTodo={
    title:todo.title,
    startTime:todo.startTime,
    endTime:todo.EndTime,
    duration:todo.duration,
    isDone:todo.isDone
  }
  dispatch({type:types.CREATE_TODO_REQUEST});
  return axios.post(`http://localhost:5000/api/todos/createTodo`,newTodo)
  .then((response)=>{
    return dispatch({type:types.CREATE_TODO_SUCCESS, payload:response})
  })
  .catch((error)=>{
    return dispatch({type:types.CREATE_TODO_FAILURE,payload:error})
  })
}

export const addTodoRequest=()=>{
    return{
      type:types.CREATE_TODO_REQUEST
    }
}

export const addTodoSuccess=()=>{
  return{
    type:types.CREATE_TODO_SUCCESS
  }
}

export const addTodoFailure=()=>{
  return{
    type:types.CREATE_TODO_FAILURE
  }
}




// Update Todo Title

export const updateTodoTitle=(id,title)=>(dispatch)=>{
  dispatch({type:types.UPDATE_TODO_TITLE_REQUEST});
  return axios.put(`http://localhost:5000/api/todos/changeTitle/${id}`,{title:title})
  .then((response)=>{
    console.log(response)
    return dispatch({type:types.UPDATE_TODO_TITLE_SUCCESS,payload:{id,title}})
  })
  .catch((error)=>{
    console.log(error)
    return dispatch({type:types.UPDATE_TODO_TITLE_FAILURE, payload:error})
  })
}

export const updateTodoTitleRequest=()=>{
  return{
    type:types.UPDATE_TODO_TITLE_REQUEST
  }
}

export const updateTodoTitleSuccess=()=>{
  return{
    type:types.UPDATE_TODO_TITLE_SUCCESS
  }
}

export const updateTodoTitleFailure=()=>{
  return{
    type:types.UPDATE_TODO_TITLE_FAILURE
  }
}




// Update Todo Status

export const updateTodoStatus=(id,isDone)=>(dispatch)=>{
  console.log(id,isDone)
  dispatch({type:types.UPDATE_TODO_STATUS_REQUEST});
  return axios.put(`http://localhost:5000/api/todos/changeStatus/${id}`,{isDone:isDone})
  .then((response)=>{
    console.log(response)
    return dispatch({type:types.UPDATE_TODO_STATUS_SUCCESS,payload:{isDone:isDone}})
  })
  .catch((error)=>{
    console.log(error)
    return dispatch({type:types.UPDATE_TODO_STATUS_FAILURE, payload:error})
  })
}

export const updateTodoStatusRequest=()=>{
  return{
    type:types.UPDATE_TODO_STATUS_REQUEST
  }
}

export const updateTodoStatusSuccess=()=>{
  return{
    type:types.UPDATE_TODO_STATUS_SUCCESS
  }
}

export const updateTodoStatusFailure=()=>{
  return{
    type:types.UPDATE_TODO_STATUS_FAILURE
  }
}





// Delete todo
export const deleteTodo=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_TODO_REQUEST,id:id});
  return axios.delete(`http://localhost:5000/api/todos/${id}`)
  .then((response)=>{
    return dispatch({type:types.DELETE_TODO_SUCCESS,payload:response})
  })
  .catch((error)=>{
    return dispatch({type:types.DELETE_TODO_FAILURE, payload:error})
  })
}

export const deleteTodoRequest=()=>{
  return{
    type:types.DELETE_TODO_REQUEST
  }
}

export const deleteTodoSuccess=()=>{
  return{
    type:types.DELETE_TODO_SUCCESS
  }
}

export const deleteTodoFailure=()=>{
  return{
    type:types.DELETE_TODO_FAILURE
  }
}