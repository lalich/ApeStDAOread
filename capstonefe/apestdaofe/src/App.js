import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios';
import './components/Header.css'
import { Outlet } from 'react-router-dom';
import W3S from './components/W3S';
import Home from './pages/Home'
import apeRouter from './Router';

function App() {
  return (
    <div className='="App'>
    <Header/>
      <Outlet/>
    </div>
  );
}

export default App;