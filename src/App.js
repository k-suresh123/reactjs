import logo from './logo.svg';
import './App.css';
import NewExpenseItem from './components/NewExpenseItem';
import React from 'react';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},"Lets get started"),
    React.createElement(NewExpenseItem,{items:expenses})
  )

 
  // return (
  //    <div>
  //     <h2>Lets get started</h2>    
  //    <NewExpenseItem items = {expenses}/>
  //    </div> 
  // );
}

export default App;
