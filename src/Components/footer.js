import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../Images/fa-brands_facebook-square.png'
import Twitter from '../Images/fa-brands_twitter.png'
import Instagram from '../Images/fa-brands_instagram.png'
import Youtube from '../Images/fa-brands_youtube.png'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-first">
            <a href='facebook.com' target='_blank'><img src={Facebook} alt="facebook-icon" className='footer-icon'/></a>
            <a href='instagram.com' target='_blank'><img src={Instagram} alt="instagram-icon" className='footer-icon'/></a>
            <a href='twitter.com' target='_blank'><img src={Twitter} alt="twitter-icon" className='footer-icon'/></a>
            <a href='youtube.com' target='_blank'><img src={Youtube} alt="youtube-icon" className='footer-icon'/></a>
        </div>

        <div className="footer-second">
            <p className='footer-link'>Conditions of use</p>
            <p className='footer-link'>Privacy & Policy</p>
            <p className='footer-link'>Press Room</p>
        </div>

        <div className="footer-third">
            <p style={{opacity:'0.6'}}>© 2021 MovieBox by Brownson Eric</p>
        </div>
    </div>
  )
}

export default Footer
