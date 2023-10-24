import React from 'react';
import './Wallet.css';

const Wallet = (props) => {
  return (
    <div className='wallet-container'>
      <h1>My Wallet 💰</h1>
      <p><b>Address:</b> {props.user.Address}</p>
      <p><b>Balance:</b> {props.user.Balance} ETH</p>
    </div>
  );
}

export default Wallet;
