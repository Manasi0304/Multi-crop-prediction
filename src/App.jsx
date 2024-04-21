import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Sign from './components/Sign'
import InputForm from './components/InputForm'
import Register from './components/Register'
import Chatbot from './components/Chatbot'
import { ToastContainer } from 'react-toastify'
import ForgotPassword from './components/ForgotPassword'

const App = () => {
  const user = localStorage.getItem('token')
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" exact element={<Sign />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/forgot_password/:id/:token"
          element={<ForgotPassword />}
        ></Route>
        {user && <Route path="/inputInterface" exact element={<InputForm />} />}
      </Routes>
      <Chatbot />
      <ToastContainer />
    </Router>
  )
}

export default App
