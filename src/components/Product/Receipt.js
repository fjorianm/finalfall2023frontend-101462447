import React, { Component } from 'react';
import './Receipt.css';

export default class Receipt extends Component {
  constructor(props) {
    super(props);
    this.bool = false;
  }

  render() {
    const { Amount, TransactionHash, BlockHash, BlockNumber, From, To, GasUsed } = this.props.receipt;

    if (Object.keys(this.props.receipt).length === 0 || Amount === "") {
      return <div></div>;
    } else {
      return (
        <div className='page'>
          <h1 className='title'>Receipt</h1>
          <br />
          <p><b>Transaction Hash:</b> {TransactionHash}</p>
          <p><b>Block Hash:</b> {BlockHash}</p>
          <p><b>Block Number:</b> {BlockNumber}</p>
          <p><b>From:</b> {From}</p>
          <p><b>To:</b> {To}</p>
          <p><b>Gas Used:</b> {GasUsed}</p>
        </div>
      );
    }
  }
}
