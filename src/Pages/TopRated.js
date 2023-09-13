import React, { useEffect, useState } from 'react'
import Favorite from '../Images/Favorite.png'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function TopRated() {
    const navigate = useNavigate()
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
          .then(response => setData(response.results))
          .then(console.log(Data))
          .catch(err => console.error(err));
      
        }

        useEffect(() => {
          getTrendingMovieData()
        })
  return (
    <div>
        < Navbar />

        <div className="home-heading">
          <h2>Top Rated Movies</h2>
        </div>

        {Data ? <><div className='card-container'>


        {Data.map((item) =>
              <Link className='card-link-container' to={`/${item.id}`}>              
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
    </div>
  )
}

export default TopRated