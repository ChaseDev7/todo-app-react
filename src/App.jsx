import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import todoData from "./components/todoData"

function App() {

  const [currentTodoList, setCurrentTodoList] = useState(todoData[0].title)
  const [currentTodos, setCurrentTodos] = useState(todoData[0].todos)

  return (
    <>
      <Header />
      <Sidebar todoListData={todoData} />
      <Main currentTodoList={currentTodoList} currentTodos={currentTodos} />
    </>
  )
}

export default App