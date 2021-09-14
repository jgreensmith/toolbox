import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import moment from 'moment';

import './TodoItem.scss';
import { IdContext } from '../../contexts/IdContext';
import { deleteTodo } from '../../actions/todos';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { setCurrentId } = useContext(IdContext);


    return (
        <>
            <p className="todo-text">{todo.message}</p>
            <div className="todo-details">
                <p>{moment(todo.createdAt).fromNow()}</p>
                <div className="btn-wrapper">
                    <button className="btn-update" onClick={() => setCurrentId(todo._id)} >Update</button>
                    <button className="btn-delete" onClick={() => dispatch(deleteTodo(todo._id))}><DeleteIcon fontSize="large" /></button>
                </div>
            </div> 
        </>
    )
}

export default TodoItem;
