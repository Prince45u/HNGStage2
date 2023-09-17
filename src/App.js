import React from 'react'
import {  Route, Routes, BrowserRouter,} from 'react-router-dom';
import Home from './Pages/Home'
import TopRated from './Pages/TopRated';
import MovieDetails from './Pages/MovieDetails';
import Error from './Components/Error';
import ErrorBoundary from './Components/Error';


function App() {
  return (
    
      <ErrorBoundary>
        <BrowserRouter >
      <div className="App">
        
      <Routes>
        <Route path="/" element={ <Home/> } errorElement = {<Error/> }/>
        <Route path="/toprated" element={ <TopRated/> } errorElement = {<Error/> }/>
        <Route path="/movies/:id" element={ <MovieDetails/> } errorElement = {<Error/> }/>
        
      </Routes>
    
      </div>
        
    </BrowserRouter>
      </ErrorBoundary>
    
  )
}

export default App