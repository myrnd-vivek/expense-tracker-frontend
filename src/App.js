import React, { useState } from 'react'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'



const App = () => {
  console.log('App render')
  const [data,setData] = useState();
  return (
    <>
      <AddExpense setData={setData}/>
      <ExpenseList data={data}/>
    </>
  )
}

export default App