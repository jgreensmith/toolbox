import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './routes/TodoList/TodoList';
import IdContextProvider from './contexts/IdContext';

const App = () => {
  return (
    <Router>
      <Navbar />
      <IdContextProvider>
        <TodoList />
      </IdContextProvider>
    </Router>
  );
}

export default App;
