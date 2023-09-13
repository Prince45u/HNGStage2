import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';


function Hero() {

    const [Data, setData] = useState([])
    const [movieNav, setMovieNav] = useState(0)

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
            .then(response => setData(response.results[movieNav]))
            .catch(err => console.error(err));
        
          }

          useEffect(() => {
            getTrendingMovieData()
          })
        

  return (
    <div className='hero' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w1280/${Data.backdrop_path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "90vh",
      backgroundColor: "#000",
    }}>
       
        <div className='hero-content'>
            <h1>{Data.title}</h1>
            <div className="hero-ratings">
                <p><i>Rating </i><b>{Data.vote_average}</b></p>
            </div>
              <p className='overview'>{Data.overview}</p>
        </div>

        <div className="hero-nav">
            <span onClick={() => setMovieNav(0)} className={movieNav === 0 ? "active" : ""}>1</span>
            <span onClick={() => setMovieNav(1)} className={movieNav === 1 ? "active" : ""}>2</span>
            <span onClick={() => setMovieNav(2)} className={movieNav === 2 ? "active" : ""}>3</span>
            <span onClick={() => setMovieNav(3)} className={movieNav === 3 ? "active" : ""}>4</span>
            <span onClick={() => setMovieNav(4)} className={movieNav === 4 ? "active" : ""}>5</span>
        </div>
    </div>
  )
}

export default Hero 