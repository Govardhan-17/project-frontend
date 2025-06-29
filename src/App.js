import React from 'react';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpense />
      <ExpenseList />
      <Dashboard />
    </div>
  );
}

export default App;
