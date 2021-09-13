import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import moment from 'moment';

import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <>
            <p className="todo-text">{todo.message}</p>
            <div className="todo-details">
                <p>{moment(todo.createdAt).fromNow()}</p>
                <div className="btn-wrapper">
                    <button className="btn-update">Update</button>
                    <button className="btn-delete"><DeleteIcon fontSize="large" /></button>
                </div>
            </div> 
        </>
    )
}

export default TodoItem;
