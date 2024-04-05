import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Complaints from './Complaint';
import logo from './logo.svg';
import './App.css';
import './AddComplaint'
import { Link } from 'react-router-dom';

function App() {
  return ( 
    
    <Router>
    
     
      <div className="App">
        <Navbar />
        <Complaints />
      </div>
    </Router>     
  );
}



export default App;

