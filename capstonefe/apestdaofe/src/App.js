import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import './components/Header.css'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='="App'>
    <Header/>
      <Outlet/>
    </div>
  );
}

export default App;