import { createStore, combineReducers } from 'redux';
import todoReducer from '../Reducers/TodoReducers';

const reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers);

export default store;
