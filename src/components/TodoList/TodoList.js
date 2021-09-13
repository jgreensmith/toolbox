import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

    console.log(todos)
    return (
        <div>
            <h1>todo list</h1>
            
            <TodoItem />
        </div>
    )
}

export default TodoList;
