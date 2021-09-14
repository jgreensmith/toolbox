import React, { useContext, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useDispatch } from "react-redux";
import moment from 'moment';

import './TodoItem.scss';
import { IdContext } from '../../contexts/IdContext';
import { deleteTodo } from '../../actions/todos';

const TodoItem = ({ todo, key }) => {
    const [clickComplete, setClickComplete] = useState(false);
    const dispatch = useDispatch();
    const { setCurrentId } = useContext(IdContext);
    const complete = () => {
        setClickComplete(!clickComplete);
    }
    

    return (
        <div key={todo._id} className={clickComplete ? 'todo-row highlight' : 'todo-row' }>
            <button 
                className="btn-completed"
                onClick={complete} 
            >
                {clickComplete ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
            </button>
            <p className="todo-text">{todo.message}</p>
            <div className="todo-details">
                <p>{moment(todo.createdAt).fromNow()}</p>
                <div className="btn-wrapper">
                    <button className="btn-update" onClick={() => setCurrentId(todo._id)} >Update</button>
                    <button className="btn-delete" onClick={() => dispatch(deleteTodo(todo._id))}><DeleteIcon fontSize="large" /></button>
                </div>
            </div> 
        </div>
    )
}

export default TodoItem;
