import * as types from  "./action.type";

const initialState={
    isLoading:false,
    isError:false,
    todos:[]
}

export const reducer=(state=initialState, action)=>{
  const { type, payload }= action;

  switch(type){
    case types.FETCH_TODOS_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false 
      };

    case types.FETCH_TODOS_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        todos:payload
      };

    case types.FETCH_TODOS_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true
      };

    case types.CREATE_TODO_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false 
      };

    case types.CREATE_TODO_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        todos:[...state.todos,payload]
      };

    case types.CREATE_TODO_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true
      };

    case types.UPDATE_TODO_TITLE_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false
      }

    case types.UPDATE_TODO_TITLE_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        todos: state.todos.map(todo => todo.id === payload.id?{...todo, title:payload.title}:todo)
      }

    case types.UPDATE_TODO_TITLE_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true
      };

      case types.UPDATE_TODO_STATUS_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false
        }
  
      case types.UPDATE_TODO_STATUS_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          todos: state.todos.map(todo => todo.id === payload.id?{...todo, isDone:payload.isDone}:todo)
        }
  
      case types.UPDATE_TODO_STATUS_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true
        };

      case types.DELETE_TODO_REQUEST:
        return{
            ...state,
          isLoading:true,
          isError:false
        }

      case types.DELETE_TODO_SUCCESS:
        return{
            ...state,
          isLoading:false,
          isError:false,
          todos: state.todos.filter(todo => todo.id !== payload.id)
        }

      case types.DELETE_TODO_FAILURE:
        return{
            ...state,
          isLoading:false,
          isError:true
        }

      default:
        return state;
  }
}