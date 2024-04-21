import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GiPlantRoots } from 'react-icons/gi'
import logo from '../assets/logo.png'
const Navbar = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
      },
      'google_translate_element'
    )
  }
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      var addScript = document.createElement('script')
      addScript.setAttribute(
        'src',
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      )
      document.body.appendChild(addScript)
      window.googleTranslateElementInit = googleTranslateElementInit
    }
  }, [])
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} className="logoImg" alt="CropCast" />
        <span>CropCast</span>
      </Link>
      <div id="navLink">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <div id="google_translate_element"></div>
      </div>
    </nav>
  )
}

export default Navbar
