import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodoForm from '../../components/TodoForm/TodoForm';
import { getTodos } from '../../actions/todos';

import "./TodoList.scss";
import { IdContext } from '../../contexts/IdContext';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    const { currentId } = useContext(IdContext);

    console.log(todos);

    useEffect(() => {
        dispatch(getTodos());
    },[currentId, dispatch]);

    return (
        <div className="list-container">
            <h1>To do List</h1>
            <TodoForm />
            <>
                {!todos.length ? (
                    <h3>Nothing to do yet!</h3>
                ) : (
                    <>
                        {todos.map((todo) => (
                            <div key={todo._id} className="todo-row">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </>
                )}
            </>
        </div>

    )
}

export default TodoList;
