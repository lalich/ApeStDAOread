import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios';
import './components/Header.css'
import { BrowserRouter as Router, Route, Link, Outlet } from 'react-router-dom';
import W3S from './components/W3S';
import Home from './pages/Home'

function App() {
  return (
    <div >
     
      <Home/>
    </div>
  );
}

export default App;