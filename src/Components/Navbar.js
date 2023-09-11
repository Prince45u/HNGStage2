import React from 'react'
import '../App.css'
import Logo from '../Images/Moviebox-Icon.png'
import Menu from '../Images/Menu.png'
import Search from '../Images/Search.png'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo-div">
            <img src={Logo} alt="Moviebox-logo" className='logo'/>
            <h2>MovieBox</h2>
        </div>

        <div className="search-div">
            <input type="text" placeholder='What do you want to watch?' className='search-input'/>
            <img src={Search} alt="search-icon" className='search-icon'/>
        </div>

        <div className="signin-div">
            <p className='signin-text'>Sign in</p>
            <img src={Menu} alt="menu-icon" className='menu-icon' />
        </div>
    </div>
  )
}

export default Navbar