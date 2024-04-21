import React, { useState } from 'react'
import './Sign.css'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:8001/reset_password/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <section className="registerForm">
      <div className="formDiv">
        <form action="POST" onSubmit={submit}>
          <h2>FORGOT PASSWORD</h2>
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
          <button type="submit" className="btn2">
            SUBMIT
          </button>
        </form>
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </div>
    </section>
  )
}

export default ForgotPassword
