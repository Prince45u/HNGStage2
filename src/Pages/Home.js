import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Favorite from '../Images/Favorite.png'
import Favorite1 from '../Images/Favorite-1.png'
import Favorite2 from '../Images/Favorite-2.png'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import RingLoader from "react-spinners/RingLoader";
import Card from '../Components/Card'


function Home({ cardId }) {
  const navigate = useNavigate()
  const [Data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [favSVGs, setFavSVGs] = useState([<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z" fill="#D1D5DB"/>
  </svg>, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.17157 1.14074C2.73367 -0.380247 5.26633 -0.380247 6.82842 1.14074L7.99999 2.28148L9.17157 1.14074C10.7337 -0.380247 13.2663 -0.380247 14.8284 1.14074C16.3905 2.66173 16.3905 5.12774 14.8284 6.64873L7.99999 13.2975L1.17157 6.64873C-0.390524 5.12774 -0.390524 2.66173 1.17157 1.14074Z" fill="#E11D48" fill-opacity="0.98"/>
  </svg>])

  const [favSVG, setFavSVG] = useState(favSVGs[0])

  function favorited() {
      setFavSVG(setFavSVGs[{}])
  }


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGVjN2E5ZGMwMWMwM2YzZGQ0NjIzNDQ1YjE3NWY3NCIsInN1YiI6IjY0ZmYxMzMzMmRmZmQ4MDBhZGI2Zjg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYOMGbE1PSOGQMOgBQ45TvAW-76iJWX-ChIVPmEBaS4'
    }
  };

      

  async function getTrendingMovieData() {
    await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setData(response.results.slice(0, 10)))
    // .then(console.log(Data))
    .then(setIsLoading(false))
    .catch(err => console.error(err));
  }

        useEffect(() => {
          getTrendingMovieData()
        })

        
  return (
    <div className="Home">
        <Navbar />
        <Hero />

        
        <div className="home-heading">
          <h2><b>Top 10 Rated Movies</b></h2>
          <Link className='see-more' to="/toprated">See More</Link>
        </div>

        {Data.length ? <><div className='card-container'>

        {Data.map((item, key) => < Card item={item} key={key} />
              
              )}

    </div></> : <><div className="spinner">{isLoading && <RingLoader color="#e11d48" size={200}/>}</div></>
}

    </div>
  )
}

export default Home