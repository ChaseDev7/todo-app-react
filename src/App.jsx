// import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App