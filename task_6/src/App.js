import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Employees from "./components/employees";
import Home from "./components/home";


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/employees'>Employees</Link>
          <Link to='/'>Home</Link>
        </header>
        <Route path='/employees' component={Employees} />
        <Route path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;

