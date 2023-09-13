import React from 'react'
import {  Route, Routes, BrowserRouter,} from 'react-router-dom';
import Home from './Pages/Home'
import TopRated from './Pages/TopRated';
import MovieDetails from './Pages/MovieDetails';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/toprated" element={ <TopRated/> } />
        <Route path="/:id" element={ <MovieDetails/> } />
        
      </Routes>
    
      </div>
        
    </BrowserRouter>
  )
}

export default App