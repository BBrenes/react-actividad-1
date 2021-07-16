import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter'
import Actions from './components/Actions'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function App() {
  const[count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const subtract = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} />
        <ButtonGroup variant="contained" color="primary" >
          <Actions action={subtract} text='Restar' />
          <Actions action={add} text='Sumar' />
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
