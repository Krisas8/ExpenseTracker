import { GlobalContext } from "../context/GlobalState";
import {Transaction} from "./Transaction"
import { useContext } from "react";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <div className="balance"> 
        <h4>Your Balance</h4>
        <h2>{total} €</h2>
        </div>
     );
}
 
export default Balance;
