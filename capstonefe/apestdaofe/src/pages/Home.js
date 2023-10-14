import React, { Component, useState, useEffect } from 'react';
import Status from '../components/Status';
import Send from '../components/Send';
import Transactions from '../components/Transactions';
import Header from '../components/Header'
import axios from 'axios';
import '../components/Header.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
const [walletAdd, setWalletAdd] = useState("");

const requestAccounts = async () => {
  console.log('Requesting access ...');
//checking for the metamask in the browser
  if(window.ethereum) {
    console.log('Eth is ready to play');
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setWalletAdd(accounts[0])
    } catch (error) {
      console.log('error getin in the door', error)
    }
  } else {
    console.log('Yo, you need the metamask wallet for this entrance to the street!')
  }

}

useEffect(() => {
  axios.get('/mine_block');
}, []);

    return (
       
      <div className='App'>
        <div className='header'>
          <Header/>
        </div>
        <div>
          <br/>
          <button onClick={requestAccounts}>Sign-in w/ Web3 Auth</button>
          <button>Sign-in Like a Boomer</button>
        </div>
        <Status/>
        <h3>Connected to Eth via: {walletAdd}</h3>
        <Send/>
        <Transactions/>
      </div>
    )
  }
  

export default Home;
