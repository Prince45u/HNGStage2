import React, { useEffect, useState } from 'react'
import Favorite from '../Images/Favorite.png'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import RingLoader from "react-spinners/RingLoader";
import Card from '../Components/Card';

function TopRated() {
    const navigate = useNavigate()
    const [Data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


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
          .then(response => setData(response.results))
          .then(console.log(Data))
          .then(setIsLoading(false))
          .catch(err => console.error(err));
      
        }

        useEffect(() => {
          getTrendingMovieData()
        })
  return (
    <div>
        < Navbar />

        <div className="home-heading">
          <h2 className='home-h2'>Top Rated Movies</h2>
        </div>

        {Data.length ? <><div className='card-container'>

        

        {Data.map((item, key) =>
              < Card item={item} key={key} />
              )}

    </div></> : <><div className="spinner">{isLoading && <RingLoader color="#e11d48" size={200}/>}</div></>}

    </div>
  )
}

export default TopRated