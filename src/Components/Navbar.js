import React, { useState } from 'react'
import '../App.css'
import Logo from '../Images/Moviebox-Icon.png'
import Menu from '../Images/Menu.png'
import Search from '../Images/Search.png'
import { Link, useNavigate } from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader";
import Card from './Card'

function Navbar() {
  const [SearchInput, setSearchInput] = useState('')
  const [SearchResults, setSearchResults] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false)



  const SearchNotVisible = () => {
    setIsVisible(false)
  }



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGVjN2E5ZGMwMWMwM2YzZGQ0NjIzNDQ1YjE3NWY3NCIsInN1YiI6IjY0ZmYxMzMzMmRmZmQ4MDBhZGI2Zjg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYOMGbE1PSOGQMOgBQ45TvAW-76iJWX-ChIVPmEBaS4'
    }
  };

  async function getSearchResults() {
      setIsLoading(true)
      await fetch(`https://api.themoviedb.org/3/search/movie?query=${SearchInput}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response.results))
      .then(SearchResults? console.log(SearchResults) : null)
      .then(setIsLoading(false))
      .catch(err => console.error(err))
      .then(setIsVisible(true))
      
  }

  return (
    <div className="nav">
      <div className='navbar'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="logo-div">
            <img src={Logo} alt="Moviebox-logo" className='logo'/>
            <h2 className='search-div-h2'>MovieBox</h2>
        </div>
        </Link>

        <div className="search-div">
            <input type="text"
             placeholder='What do you want to watch?'
              className='search-input'
              value={SearchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              />
            <img src={Search} alt="search-icon" className='search-icon' onClick={getSearchResults}/>
        </div>

        <div className="signin-div">
            <p className='signin-text'>Sign in</p>
            <img src={Menu} alt="menu-icon" className='menu-icon' />
        </div>
    </div>

    {SearchResults ? <div className="search-results" style={{ display: isVisible ? "block" : "none" }}>
    <div className="home-heading">
          <h2 className='home-h2'>Search Results for {SearchInput}</h2>
          <p className="see-more" onClick={SearchNotVisible}>close</p>
        </div>

        {SearchResults.length ? <><div className='card-container'>


        {SearchResults.map((item, key) =>
              < Card item={item} key={key} />
              )}

    </div></> : <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px'}}><h1>Result not Found</h1></div>}

    
    </div>: <div className="spinner">{isLoading && <RingLoader color="#e11d48" size={200}/>}</div>}

    
    
    </div>
    
  )
}

export default Navbar