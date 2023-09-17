import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Card({item}) {
    const [Favorited, setFavorited] = useState(false)

    function handleFavorite() {
        setFavorited(!Favorited)
    }
    

  return (
    <div style={{position:'relative'}}>
        <div className={Favorited ? 'favorite-active' : 'favorite'} onClick={handleFavorite}><svg xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none">
  <path fill-rule="evenodd"
  clip-rule="evenodd"
  d="M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z"
  fill={Favorited ? '#e11d48' : '#D1D5DB'}/>
  </svg></div>              
                <div data-testid="movie-card"  className="card">
              <Link className='card-link-container' to={`/movies/${item.id}`}>
                  <div data-testid="movie-poster" className="card-img" style={{ 
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", }}>

                      
                  </div>

                  <div className="card-content">
                      <p data-testid="movie-release-date" className='release-date' style={{ color: "#e11d48", fontSize: "13px"}}>{item.release_date}</p>
                      <h4 data-testid="movie-title" className='movie-title'>{item.title}</h4>
                      <p className='home-ratings' style={{ color: "#e11d48", fontSize: "14px" }}>{item.vote_average}</p>
                      
                  </div>
              </Link>
              </div>
    </div>
  )
}

export default Card
