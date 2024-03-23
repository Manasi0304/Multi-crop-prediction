import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import './Home.css'
const Home = () => {
  return (
    <div id="Home">
      <div id="mainHome">
        <h1>CropCast</h1>
        <h3>The Crop Prediction System!</h3>
        <button type="click" className="btn">
          Get started
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Home
