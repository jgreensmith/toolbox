import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './routes/Todo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Todo />
    </Router>
  );
}

export default App;
