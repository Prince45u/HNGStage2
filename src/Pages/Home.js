import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import { Link} from 'react-router-dom';
import Navbar from '../Components/Navbar'
import RingLoader from "react-spinners/RingLoader";
import Card from '../Components/Card'
import Footer from '../Components/footer';


function Home() {
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
          <h2><b className='home-h2'>Top 10 Rated Movies</b></h2>
          <Link className='see-more' to="/toprated">See More</Link>
        </div>

        {Data.length ? <><div className='card-container'>

        {Data.map((item, key) => < Card item={item} key={key} />
              
              )}

    </div></> : <><div className="spinner">{isLoading && <RingLoader color="#e11d48" size={200}/>}</div></>
}

        <Footer />
    </div>
  )
}

export default Home