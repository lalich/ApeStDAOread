import { useState } from "react";
import React from "react";


const W3S = () => {  
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
}

export default W3S