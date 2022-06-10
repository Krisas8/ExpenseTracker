import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from './Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return ( 
       <>
       <h4 className="transactionTitle">History</h4>     
         <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>        
        ))}              
         </ul>
       
       </> 
     );
}
 
export default TransactionList;