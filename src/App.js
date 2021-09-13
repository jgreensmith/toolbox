import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './routes/TodoList/TodoList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <TodoList />
    </Router>
  );
}

export default App;
