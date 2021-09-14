import * as api from '../api';

export const getTodos = () => async (dispatch) => {

    try {
        const { data } = await api.fetchTodos();

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }

}

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todo);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = (id, todo) => async (dispatch) => {
    try {
        const { data } = await api.updateTodo(id, todo);

        dispatch({ type: 'UPDATE', payload: data });

    } catch (error) {
        console.log(error);
    }
}