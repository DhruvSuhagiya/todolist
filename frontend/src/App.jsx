import React from 'react'
import Input from './components/input/Input';
import Output from './components/output/Output';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Input/>
      <Output/>
    </div>
  )
}

export default App
