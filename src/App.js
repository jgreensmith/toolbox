import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
