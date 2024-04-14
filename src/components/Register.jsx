import React, { useState } from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import { MdOutlineLockReset } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const notify = () => {
    toast('Registered')
  }

  const submit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:8001/register'
    axios
      .post(url, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        notify
        console.log(result)
        notify
        navigate('/login')
        notify
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="registerForm">
      <div className="formDiv">
        <form action="POST" onSubmit={submit}>
          <h2>CUSTOMER REGISTER</h2>
          <div className="inpt">
            <FaUser />
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inpt">
            <FaUser />
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="inpt">
            <MdEmail />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inpt">
            <FaUnlockAlt />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn2">
            REGISTER
          </button>
        </form>
        <ToastContainer />
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </div>
    </section>
  )
}

export default Register
