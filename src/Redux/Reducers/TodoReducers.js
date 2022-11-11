import { ADD_TODO } from '../Actions/todoActions'

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
      default:
        return state;
    }
  };
  
  export default todoReducer;
  