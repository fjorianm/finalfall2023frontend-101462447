import "./Transaction.css";

const Transactions=(props)=>{
    const show=()=>{
        return(props.list.map((item,index)=>{
            return(
                <div key={index} className="Transaction">
                    <p><b>Transaction Hash:</b> {item.TransactionHash}</p>
                    <p><b>Status:</b> {item.Status}</p>
                    <p><b>Timestamp:</b> {item.Timestamp}</p>
                    <p><b>From:</b> {item.From} </p>
                    <p><b>To: </b>{item.To} </p>
                    <p><b>Value: </b>{item.Value} ETH </p>
                    <p><b>Gas Used: </b>{item.GasUsed} </p>
    
                </div>
            )
        }))
    }
    
   return (
    <div>
        <h1>Transaction History</h1>
        {show()}
    </div>
   )
    
   
}

export default Transactions