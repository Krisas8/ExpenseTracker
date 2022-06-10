import { GlobalContext } from "../context/GlobalState";
import {Transaction} from "./Transaction"
import { useContext } from "react";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
    amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) *-1
  ).toFixed(2);

    return ( 
        <>
        <div className="incomeexpenses">
        <div className="income">
        <h5>Income</h5>
        <h3>{income}</h3>
        </div>
        <div className="dividingline"></div>
        <div className="expenses">    
        <h5>Expenses</h5>
        <h3> {expense}</h3>
        </div>
        </div>
        </>
     );
}
 
export default IncomeExpenses;