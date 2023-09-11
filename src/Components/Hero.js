import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';


function Hero() {
    let {id} = useParams()

    const [Data, setData] = useState([])
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
        //.then(response => console.log(response.results))
        .then(response => setData(response.results[0]))
        .then(Data? console.log(Data) : null)
        .catch(err => console.error(err));
        
          }

          useEffect(() => {
            getTrendingMovieData()
          })
        

  return (
    <div className='hero'>
       <div className='hero-content'>
            <h1>{Data.title}</h1>
            <div className="hero-ratings">
                <p><i>Rating</i><b>{Data.vote_average}</b></p>
            </div>
        </div> 
    </div>
  )
}

export default Hero