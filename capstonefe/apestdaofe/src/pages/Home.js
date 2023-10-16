import React, { Component, useState, useEffect } from 'react';
import Status from '../components/Status';
import Send from '../components/Send';
import Transactions from '../components/Transactions';
import Header from '../components/Header'
import axios from 'axios';
import '../components/Header.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

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
// const connectWallet = async () => {
//   if (typeof window.ethereum !== 'undefined') {
//     await requestAccounts();
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     console.log('You are in the Jungle now using')
    
//   }
// }

// const handleW3Sign_in = () => {
//   requestAccounts()
//   connectWallet()
// }
const toJungle = useNavigate();

const navToJungle = () => {
  toJungle('/jungle')
}
const toSu = useNavigate();

const navToSu = () => {
  toJungle('/joinapest')
}

const navToLi = () => {
  toJungle('/blogin')
}


useEffect(() => {
  axios.get('/mine_block');
}, []);

    return (
       
      <div className='App'>
        <div className='header'>
        
        </div>
        <div>
          <br/>
          <button className='ethlogi' onClick={requestAccounts}>Sign-in w/ Web3</button>
          <br/><br/>
          <button onClick={navToSu}>BoomBoom Sign-up</button>
          <button onClick={navToLi}>BoomBoom Login</button>
          <br/><br/>
          <button onClick={navToJungle}>Create an ApeSt DAO Project</button>
        </div>
        <br/>
        <h2 style={{color:"#378b20"}}>ApeSt DAO</h2>
        <h3>Connected to: <br/> {walletAdd}</h3>
        <Status/>
       
        
        <Send/>
        <Transactions/>
      </div>
    )
  }
  

export default Home;
