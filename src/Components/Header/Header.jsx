import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="nav">
        <div className="nav_link">
            <div className="logo">
                E Waste
            </div>
            <div className="link">
                <p>Home</p>
                <p>Nearby</p>
                <p>Message</p>
                <p>Contact</p>
                <p>About</p>
                <p className='login_btn'>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Header