import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">LOGO</Link>
      <div id="navLink">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </div>
    </nav>
  )
}

export default Navbar
