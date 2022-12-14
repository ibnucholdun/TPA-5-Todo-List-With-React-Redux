export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const updatedTodo = (id, updatedTodo) => ({
    type: UPDATE_TODO,
    id,
    updatedTodo
})