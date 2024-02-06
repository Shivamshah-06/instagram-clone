import React from 'react';
import './App.css'
import SideNav from './components/SideNav'
import Home from './components/Homep';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {


  return (
    <div className='d-flex col bg-black'>
      <SideNav/>
      
      <Home/>
    </div>
  )
}

export default App
