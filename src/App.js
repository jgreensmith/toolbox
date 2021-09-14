import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './routes/TodoList/TodoList';
import IdContextProvider from './contexts/IdContext';
import Home from './routes/Home/Home';
import Calculator from './routes/Calculator/Calculator';

const App = () => {
  return (
    <Router>
      <Navbar />
      <IdContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" exact component={TodoList} />
          <Route path="/calculator" exact component={Calculator} />
        </Switch>
      </IdContextProvider>
    </Router>
  );
}

export default App;
