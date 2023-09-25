import { useState } from 'react'


//2 - reaproveitamento de estrutura

// Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {

  return (
      <div className='App'>
          <Outlet />
          
      </div>
   
  )
}

export default App
