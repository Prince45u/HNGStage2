import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Logo from '../Images/Moviebox-Icon.png'
import Calendar from '../Images/Calendar.png'
import Home from '../Images/Home (1).png'
import List from '../Images/List.png'
import Logout from '../Images/Logout.png'
import MovieProjector from '../Images/Movie Projector.png'
import Star from '../Images/Star.png'
import TvShow from '../Images/TV Show.png'
import Tickets from '../Images/Two Tickets.png'
import Play from '../Images/Play.png'


function MovieDetails() {
    let {id} = useParams()

    const [movieNavLink, setMovieNavLink] = useState(1)
    const [Data, setData] = useState([])
    const [Data2, setData2] = useState([])
    const [Directors, setDirectors] = useState([])
    const [UtcDate, setUtcDate] = useState()


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGVjN2E5ZGMwMWMwM2YzZGQ0NjIzNDQ1YjE3NWY3NCIsInN1YiI6IjY0ZmYxMzMzMmRmZmQ4MDBhZGI2Zjg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYOMGbE1PSOGQMOgBQ45TvAW-76iJWX-ChIVPmEBaS4'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => setData(response))
        //.then(console.log(Data))
        .catch(err => console.error(err));

        const getUTC = () => {
            const utcDate = new Date(Data.release_date).toUTCString();
            const stringDate = utcDate.split(" ").slice(0, 4).join(" ");
            console.log(stringDate);
            return stringDate;
          };

        const formatter = new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
        });



      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(response => setData2(response))
            //.then(console.log(Data2))
            .catch(err => console.error(err));

            const filterDirectors = () => {
                setDirectors(
                  Data2?.filter((credit) => credit.job !== "Director")
                );
              };


            //  console.log(Directors);

  return (
    <div className='movie-details'>
        <div className="movie-details-nav">
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <div className="logo-div">
            <img src={Logo} alt="Moviebox-logo" className='logo'/>
            <h2>MovieBox</h2>
        </div>
        </Link>

        <div className="movie-nav-links">

            <Link className={movieNavLink === 0 ? "movie-nav-link-active" : "movie-nav-link"} onClick={() => setMovieNavLink(0)}>
                <img src={Home} alt="Home" className="mnl-icon" />
                <p>Home</p>
            </Link>

            <Link className={movieNavLink === 1 ? "movie-nav-link-active" : "movie-nav-link"} onClick={() => setMovieNavLink(1)}>
                <img src={MovieProjector} alt="Movies" className="mnl-icon" />
                <p>Movies</p>
            </Link>

            <Link className={movieNavLink === 2 ? "movie-nav-link-active" : "movie-nav-link"} onClick={() => setMovieNavLink(2)}>
                <img src={TvShow} alt="Tv-Series" className="mnl-icon" />
                <p>Tv Series</p>
            </Link>

            <Link className={movieNavLink === 3 ? "movie-nav-link-active" : "movie-nav-link"} onClick={() => setMovieNavLink(3)}>
                <img src={Calendar} alt="Upcoming" className="mnl-icon" />
                <p>Upcoming</p>
            </Link>
        </div>

        <div className="nav-footer">
            <div className="quiz-card">
                <p>Play movie quizes<br/>and earn<br/>free tickets</p>

                <p style={{fontSize: 'smaller', color: '#666666'}}>50k people are playing now</p>

                <button className='quiz-button'>Start Playing</button>
            </div>

            <Link className={movieNavLink === 4 ? "movie-nav-link-active" : "movie-nav-link"} onClick={() => setMovieNavLink(4)}>
                <img src={Logout} alt="Logout" className="mnl-icon" />
                <p>LogOut</p>
            </Link>
        </div>


        </div>

        <div className="movie-details-content">
            <div className="first" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://image.tmdb.org/t/p/w1280/${Data.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000"}}>

                    <img src={Play} alt="play" />
                    <p style={{color:'white'}}>Watch Trailer</p>

            </div>

            <div className="second">
                <div className="movie-details-bio">
                    <h2>{Data.title}</h2>
                    <span>•</span>
                    <h4>{getUTC()}</h4>
                    <span>•</span>
                    <h4>{Data.runtime}m</h4>

                    {Data && Data.genres ? Data.genres.map(genre => ( <>
                        <span className="movie-genre" id={genre.id}>
                            {genre.name}
                        </span></> )) : ""}

                </div>

                <div className="movie-details-ratings">
                        <span>
                        <img src={Star} alt="" />
                        {Data.vote_average}
                        </span>
                        <span> | </span>
                        <span>
                        {formatter.format(Data.vote_count)}
                        </span>
                </div>
            </div>

            <div className="third">
                        
                    <p className='movie-details-description'>{Data.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails