import React from 'react'
import {  Route, Routes, BrowserRouter,} from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar'


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        
        <Navbar />


      <Routes>
        <Route path="/" element={ <Home/> } />
        
      </Routes>
    
      </div>
        
    </BrowserRouter>
  )
}

export default App