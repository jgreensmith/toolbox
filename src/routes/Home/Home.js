import React from 'react';
import { Link } from 'react-router-dom';
import task from '../../images/task.png';
import calculator from '../../images/calculator.png'

import './Home.scss';

const Home = () => {
    return (
        <div className="home-box">
            <Link to="/todos" id="list-link">
                <div className="todo-box">
                    <button className="todo">
                        <img src={task} alt="Task icon"></img>
                    </button>
                    <p>To Do List</p>
                </div>
                
            </Link>
            <Link to="/calculator" id="list-link">
                <div className="todo-box">
                    <button className="todo padding">
                        <img src={calculator} alt="Task icon"></img>
                    </button>
                    <p>Calculator</p>
                </div>
                
            </Link>
        </div>
        
    )
}

export default Home;


//task icons PNG Designed By IYIKON from <a href="https://pngtree.com"> Pngtree.com</a>