import {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddNewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
       e.preventDefault(); 
       const newTransaction = {
           id: Math.floor(Math.random() * 100000000),
           text,
           amount: +amount, 
       }
       addTransaction(newTransaction);
       setText('');
       setAmount('');
    }

    return ( 
        <>
        <h4 className="AddNewTransactionTitle">Add a new transaction</h4>
        
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label className="label" htmlFor="text">Text</label>
                <div>
                <input className="input" type="text" maxLength="12" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter a text (max. 12 characters)...." />
                </div>
            </div>
            <div className="form-control">
                <label className="label" htmlFor="amount">Amount  
                <div className="amountDescription">
                    (negative - expense, positive - income)</div>
                </label>
                <div>
                <input className="input" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
            </div>
            <button disabled={!text || !amount}className="btn-addTransaction">Add transaction</button>
        </form>
        </>
     );
}
 
export default AddNewTransaction;