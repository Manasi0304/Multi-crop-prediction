import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id="Home">
      <div id="mainHome">
        <h1>Crop-Cast</h1>
        <h3>Crop Prediction System !</h3>
        <button type="click" className="btn">
          <Link to="/login">Get started</Link>
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Home
