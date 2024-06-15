import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='todo-container'>
     <Header/>
     <TodoItem text="Eat"/>
     <TodoItem text="Code"/>
     <TodoItem text="Play"/>
     <TodoItem text="Study"/>
     <Button/>
    </div>
  )
}

export default App
