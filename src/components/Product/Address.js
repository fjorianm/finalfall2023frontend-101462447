import React from 'react';
import { Link } from 'react-router-dom';
import './Address.css';

const Address = (props) => {
  const showAddresses = () => {
    return props.Addresses.map((item) => (
      <li key={item} className="address">
        <Link to={`/address/${item}`}>{item}</Link>
      </li>
    ));
  };

  return (
    <div>
      <h1>Blockchain Node Addresses</h1>
      <ul className="container">
        {showAddresses()}
      </ul>
    </div>
  );
};

export default Address;
