import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import task from '../../images/task.png';
import calculator from '../../images/calculator.png';
import weather from '../../images/weather.png';

import './Home.scss';
import { ForecastContext } from '../../contexts/ForecastContext';

const Home = () => {
    const { forecast } = useContext(ForecastContext);
    
    const [currentWeather, setCurrentWeather] = useState(weather);

    useEffect(() => {
        if (forecast) {
            setCurrentWeather(forecast.currentDay.weatherIcon);
        } else {
            return;
        }
    }, []);

    // icon shows weather of current location, if no location then uses fixed icon 

    return (
        <div className="home-box">
            <Link to="/todos" id="list-link">
                <div className="todo-box">
                    <button className="todo">
                        <img className="icon" src={task} alt="Task icon"></img>
                    </button>
                    <p>To Do List</p>
                </div>
                
            </Link>
            <Link to="/calculator" id="list-link">
                <div className="todo-box">
                    <button className="todo padding">
                        <img className="icon" src={calculator} alt="Task icon"></img>
                    </button>
                    <p>Calculator</p>
                </div>
                
            </Link>
            <Link to="/weather" id="list-link">
                <div className="todo-box">
                    <button className="todo forecast">
                        <img className="icon weather" src={currentWeather} alt="Task icon"></img>
                    </button>
                    <p>Weather</p>
                </div>
                
            </Link>
        </div>
        
    )
}

export default Home;


//task icons PNG Designed By IYIKON from <a href="https://pngtree.com"> Pngtree.com</a>