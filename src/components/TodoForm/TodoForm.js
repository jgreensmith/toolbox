import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../actions/todos';

import './TodoForm.scss';

const TodoForm = ({ currentId, setCurrentId }) => {
    const [input, setInput] = useState({ message: "" });
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(input));
    }
    // const handleChange = (e) => {
    //     setInput({...input, message: e.target.value })
    // }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="Update Task"
                value={input.message}
                onChange={(e) => setInput({...input, message: e.target.value })}
                name='input'
                className='todo-input'
            />
            <button type='submit' className='todo-button'>
                { currentId ? <>Add</> : <>Update</> } Todo
            </button>
              
        </form>
    )
}

export default TodoForm;
