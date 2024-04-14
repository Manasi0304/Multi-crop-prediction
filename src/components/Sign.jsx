import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaUnlockAlt } from 'react-icons/fa'
import './Sign.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Sign = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8001/login', {
        email,
        password,
      })
      .then((res) => {
        // Notify user of successful login
        toast.success('Logged in successfully')

        console.log(res.data)
        navigate('/inputInterface')
        localStorage.setItem('token', res.data)
        window.location = '/inputInterface'
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="registerForm">
      <div className="formDiv">
        <form action="POST" onSubmit={submit}>
          <h2>CUSTOMER LOGIN</h2>
          <div className="inpt">
            <MdEmail />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inpt">
            <FaUnlockAlt />
            <input
              type="password"
              name="password"
              id="pswd"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn2">
            LOGIN
          </button>
        </form>
        <Link to="/register" className="link">
          REGISTER
        </Link>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Sign
