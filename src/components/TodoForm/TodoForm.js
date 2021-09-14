import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../../actions/todos';
import { IdContext } from '../../contexts/IdContext';

import './TodoForm.scss';

const TodoForm = () => {
    const [input, setInput] = useState({ message: "" });
    const dispatch = useDispatch();
    const { currentId, setCurrentId } = useContext(IdContext);
    const todo = useSelector((state) => currentId ? state.todos.find((t) => t._id === currentId) : null);

    useEffect(() => {
        if(todo) setInput(todo)
    }, [todo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (currentId === 0) {
            dispatch(createTodo(input));
            clear();
        } else {
            dispatch(updateTodo(currentId, input));
            clear();
        }
    }
    const clear = () => {
        setCurrentId(0);
        setInput({ message: "" });
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="What do I need to do?"
                value={input.message}
                onChange={(e) => setInput({...input, message: e.target.value })}
                name='input'
                className='todo-input'
            />
            <button type='submit' className='todo-button'>
                { currentId ? <>Update</> : <>Add</> } Todo
            </button>
              
        </form>
    )
}

export default TodoForm;
