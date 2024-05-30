import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Category from './components/category'
import React from 'react'


function App() {

  return (
    <>  
      <div className="app">
       
        <Header />
        <Category />
        <Outlet />
      </div>
    </>
  )
}

export default App
