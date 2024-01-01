// import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import todoData from "./components/todoData"

function App() {

  return (
    <>
      <Header />
      <Sidebar todoListData={todoData} />
      <Main />
    </>
  )
}

export default App