import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './routes/TodoList/TodoList';
import IdContextProvider from './contexts/IdContext';
import Home from './routes/Home/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <IdContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" exact component={TodoList} />
        </Switch>
      </IdContextProvider>
    </Router>
  );
}

export default App;
