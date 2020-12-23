import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Character from './components/Character';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  return (
    <>
    
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/character/:id' component={Character} />
    </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
