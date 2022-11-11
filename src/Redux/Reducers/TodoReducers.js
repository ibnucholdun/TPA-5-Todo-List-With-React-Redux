import { ADD_TODO, DELETE_TODO } from '../Actions/todoActions'

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
        
      default:
        return state;
    }
  };
  
  export default todoReducer;
  