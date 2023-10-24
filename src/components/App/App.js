// import logo from './logo.svg';
import './App.css';
import Address from "../Product/Address";
import Wallet from "../Product/Wallet";
import Transactions from "../Product/Transactions";
import Transfer from "../Product/Transfer";
import {useState} from 'react';
import {BrowserRouter,Route,Link, Routes} from "react-router-dom";



// 5. child components are: 
//            - transactions: transfer the transaction list to it.
//            - Address: transfer the address list to it which will show a list 
//                     of the address link.
//            - Transfer: transfer the constant variable, state wallet and 
//                       function setState to it. This functions are used to
//                       change the state transactionList and Wallet account.
//            - Wallet: transfer the state wallet to it.  


const addresses=[
      "0x515DSA5456DF4S18AcFAc76C2CbF5FD6717c14dF",
      "0x8a44A825cb3c7185a58b3C67ff249623E319Fa20",
      "0xb5f3b2444855910775Afec96Cd72c3c917C77927",
      "0xa80F9a4d5260e7e9cc12257b376E96ED4FC3b723",
      "0xDca7CbBB1EaF4AD2C3bf1AfFd8AA06386dE420Df"
    ]

function App() {
  
  const [List,setList]=useState([]);
  const [User,setUser]=useState({
    Address:"0x515DSA5456DF4S18AcFAc76C2CbF5FD6717c14dF",
    Balance: 2000
  });

  function handleList(input,balance){
    console.log(input)
    setList((pre)=>{
      return([...pre,input])
    })
    setUser({
      Address:"0x515DSA5456DF4S18AcFAc76C2CbF5FD6717c14dF",
      Balance:balance
    });
  }

  
  return (
    <BrowserRouter>
      <div>
        <div className='nav'>|
          <Link to="./transaction">Transactions</Link> |
          <Link to="./address">Address</Link> |
          <Link to="./wallet">Wallet</Link>|
         

        </div>
 

         <Routes>
          <Route path="/address" element={<Address Addresses={addresses} />}  exact/>
          <Route path="/transaction" element={<Transactions list={List}/>} />
          <Route path="/wallet" element={<Wallet user={User} />} />
          <Route path="/address/:id"  element={<Transfer user={User} updateList={handleList} />}
          />
         </Routes>
       
    </div>
    </BrowserRouter>
    

  )
}

export default App;
