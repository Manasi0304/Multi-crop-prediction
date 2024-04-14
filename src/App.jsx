import React from 'react'
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
import FAQ from './components/FAQ'
import InputForm from './components/InputForm'
import Register from './components/Register'
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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/inputInterface" exact element={<InputForm />} />
      </Routes>
    </Router>
  )
}

export default App
