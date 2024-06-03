import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] =useState([]);

  async function apicall(){
    const res = await fetch("http://localhost:3000/todos");
    const json=await res.json();
    setTodos(json.todos)
  }
  
  apicall()

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos> 
    </div>
  )
}

export default App
