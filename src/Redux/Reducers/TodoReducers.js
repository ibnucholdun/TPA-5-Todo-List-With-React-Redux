import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Actions/todoActions'

const initialState = {
    data: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          data: [...state.data, action.payload],
        };

      case DELETE_TODO:
        const filteredData = state.data.filter((todo) => todo.id !== action.id);
        return {
          data: filteredData,
        }
        
        case UPDATE_TODO:
          const updatedData = state.data.map((todo) => {
            if (todo.id === action.id) {
              return {
                ...todo,
                ...action.updatedTodo,
              };
            }
            return todo;
          });
          return {
            data: updatedData,
          };

      default:
        return state;
    }
  };
  
  export default todoReducer;
  