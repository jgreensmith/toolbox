import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import { getTodos } from '../actions/todos';

const Todo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    },[dispatch]);


    return (
        <div>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo;
