import React from 'react'
import background from '../Images/404-bg.jpg'
import Emoji from '../Images/🥲.png'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='-background'>
        <div className="-content">
            <h1 className="-h1">404</h1>
            <h1 className="-text">There's Nothing Here....</h1>
            <p className="-p">....Maybe the page you are looking for does not exist</p>

            <Link to={'./'}><button className='err-button'>Back Home</button></Link>
        </div>
        
    </div>
  )
}

export default PageNotFound