import React from 'react';
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>

        <h1 className='apest'>ApeSt DAO</h1>
       
      <img className='logo' src= "./ApeStLogo.png" alt="ApeSt Icon" />
      
      <div className='text-container'>
        <h5 className='h5h'>All People Equal,</h5>
        <h4 className='owner'>Own What You Own,</h4>
        <h5 className='h5h'>Make An Impact!</h5>
      </div>
    </div>
  );
};

export default Header;