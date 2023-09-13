import React, { useState } from 'react'
import '../App.css'
import Logo from '../Images/Moviebox-Icon.png'
import Menu from '../Images/Menu.png'
import Search from '../Images/Search.png'
import { Link, useNavigate } from 'react-router-dom'
import Favorite from '../Images/Favorite.png'

function Navbar() {
  const navigate = useNavigate()
  const [SearchInput, setSearchInput] = useState('')
  const [SearchResults, setSearchResults] = useState([])
  const [isVisible, setIsVisible] = useState(false);


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
      await fetch(`https://api.themoviedb.org/3/search/movie?query=${SearchInput}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response.results))
      .then(SearchResults? console.log(SearchResults) : null)
      .catch(err => console.error(err))
      .then(setIsVisible(true))
  }

  return (
    <div className="nav">
      <div className='navbar'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="logo-div">
            <img src={Logo} alt="Moviebox-logo" className='logo'/>
            <h2>MovieBox</h2>
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
          <h2>Search Results for {SearchInput}</h2>
          <p className="see-more" onClick={SearchNotVisible}>close</p>
        </div>

        {SearchResults ? <><div className='card-container'>


        {SearchResults.map((item) =>
              <Link className='card-link-container' to={`/${item.id}`} onClick={SearchNotVisible}>              
                <div className="card">
                  <div className="card-img" style={{ 
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", }}>

                      <img src={Favorite} alt="Favorite" className='favorite' />
                  </div>

                  <div className="card-content">
                      <p className='release-date' style={{ color: "#e11d48", fontSize: "13px"}}><i style={{ color: "black", opacity: "0.6"}}>Release Date  </i>{item.release_date}</p>
                      <h4 className='movie-title'>{item.title}</h4>
                      <p className='home-ratings' style={{ color: "#e11d48", fontSize: "14px" }}><i style={{ color: "black", opacity: "0.6" }}>Ratings  </i>{item.vote_average}</p>
                  </div>
                </div>
              </Link>
              )}

    </div></> : <>Loading...</>}
    </div>: null}
    </div>
  )
}

export default Navbar