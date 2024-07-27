import React from 'react'
import Logo from "../assets/omegle-logo.png";
import "../styles/home.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <img src={Logo} className="logo" />
          <h2>Talk to strangers</h2>
          <div className="online-status">5000+ online now</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
