import React, { Component, useState, useEffect } from 'react';
import Status from '../components/Status';
import axios from 'axios';
import '../components/Header.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const ApeStDAO = () => {
const [walletAdd, setWalletAdd] = useState("");
const [contractDetails, setContractDetails] = useState(null)

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


useEffect(() => {
  axios.get('/mine_block');
}, []);

const loadContractDetails = async () => {
  try {
    const response = await axios.get('/contract_details');
    setContractDetails(response.data.contract_details);
  } catch (error) {
    console.error('Error loading the deets:', error);
  }
}

useEffect(() => {
  loadContractDetails();
}, []);

    return (
       
      <div className='App'>
        <div className='header'>
        
        </div>
        <div>
          <br/>
          <button className='ethlogi' onClick={requestAccounts}>Sign-in w/ Web3</button>
        </div>
        <h2 style={{color:"#378b20"}}>ApeSt DAO</h2>
        
        <div>
          {contractDetails && (
            <div>
          <h2>Your Contract Details:</h2>
          <h3>{contractDetails.message}</h3>
          <p>Contract Address: {contractDetails.contract}</p>
          <p>Project Name: {contractDetails.name}</p>
          <p>EIN/TIN: {contractDetails.ein}</p>
          <p>Project Description: {contractDetails.description}</p>
          <p>Founder: {contractDetails.founder}</p>
          <p>HQ Location: {contractDetails.locationZip}</p>
          <p>Website: {contractDetails.website}</p>
          {contractDetails.jungle && (
            <p>Tier: Jungle</p>
          )} 
          {contractDetails.tree && (
            <p>Tier: Tree</p>
          )}
          {contractDetails.node && (
            <p>Tier: Node</p>
          )}
        </div>
          )}
          </div>
        <br/>
          <button onClick={navToJungle}>Create an ApeSt DAO Project</button>
          <br/><br/>
        <div className="link">
        <Link to="/">Back to the DAO Chain!</Link>
        </div>
        <Status/>
        <div className='b2h'>
            
            </div>
        
      
      </div>
    )
  }
  

export default ApeStDAO;
