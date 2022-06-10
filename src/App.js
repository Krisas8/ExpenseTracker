import './App.css';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import {GlobalProvider} from "./context/GlobalState"


function App() {
  return (
    <GlobalProvider>
    <div className="grid-container">
      <div className="header">
     <Header/>
     </div>
     <div className="balance">
     <Balance/>
     </div>
     <IncomeExpenses/>
     <div className="transactions">
     <TransactionList/>
     </div>
     <div className="addNewTransaction">
      <AddNewTransaction/>
     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
