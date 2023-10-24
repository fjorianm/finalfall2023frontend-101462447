import { useState,useEffect} from "react"
import { useParams } from "react-router-dom"

import Receipt from './Receipt';
import './Transfer.css';
import moment from "moment";


const Transfer=(props)=>{
    const [receipt,setReceipt]=useState({});
    const [input,setInput]=useState("")

    const {Address,Balance}=props.user;
    const {id}=useParams();
    const {updateList}=props


    useEffect(() => {
        if(Object.keys(receipt).length !== 0){
            updateList(receipt,Balance-parseFloat(input))
            setInput(
                input=>input=""
            )
        }
    },[receipt])


    function handleSumbit(e){
        e.preventDefault();
        const a=input;
        let valueOfA=parseFloat(a);
        let time=moment().format('YYYY-MM-DD T HH:MM:SS.SSS');

        if(Balance>valueOfA){    
             setReceipt({   
                Status:"SUCCESS",
                Timestamp:time,                
                TransactionHash: "0xdfbc75b254db76ade94581ce4463dec284865148cce297cf512227d9e9e10fd2",
                BlockHash:"0xcf6a288e5647c48c4ed82c821c1d5ac6da125c42a72b2aacb12d4b54e47c5bf8",
                BlockNumber:3,
                From:Address,
                To: id,
                GasUsed: 21000,  
                Value: valueOfA     
            })
         }
        else{
             setReceipt({})
         }

    }

    const handleInputChange=(e)=>{
        const input= e.target.value.replace(/\D/g, '');
        setInput(input);
        

    }

    const FormType=()=>{
        return(
            <form onSubmit={handleSumbit} className="wrapper">
                <p>From: {Address} </p>
                <p>To: {id} </p>
                <label><span>Amount: </span> <input value={input} onChange={handleInputChange} /></label>
                <p><button type="submit">Submit</button></p>

            </form>
        )

    }


    return(
        
        <div>
            <h1>Transfer</h1>
                {FormType()}
            <Receipt receipt={receipt}/>
        </div>
    )
}

export default Transfer