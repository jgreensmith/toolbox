import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './routes/TodoList/TodoList';
import IdContextProvider from './contexts/IdContext';
import Home from './routes/Home/Home';
import Calculator from './routes/Calculator/Calculator';
import ForecastPage from './routes/ForecastPage/ForecastPage';
import ForecastContextProvider from './contexts/ForecastContext';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" exact component={Calculator} />
          <IdContextProvider>
            <Route path="/todos" exact component={TodoList} />
          </IdContextProvider>
          <ForecastContextProvider>
            <Route path="/weather" exact component={ForecastPage} />
          </ForecastContextProvider>
        </Switch>
    </Router>
  );
}

export default App;
