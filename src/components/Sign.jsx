import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaUnlockAlt } from 'react-icons/fa'
import Register from './Register'
import './Sign.css'

const Sign = () => {
  const [registerForm, setRegisterForm] = useState(false)

  return (
    <section className="registerForm">
      {registerForm ? (
        <div className="formDiv">
          <Register />
          <button
            type="button"
            onClick={() => setRegisterForm(false)}
            className="btn2"
          >
            LOGIN
          </button>
        </div>
      ) : (
        <div className="formDiv">
          <form>
            <h2>CUSTOMER LOGIN</h2>
            <div className="inpt">
              <MdEmail />
              <input type="email" name="email" placeholder="Email ID" />
            </div>
            <div className="inpt">
              <FaUnlockAlt />
              <input
                type="password"
                name="password"
                id="pswd"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn2">
              LOGIN
            </button>
          </form>
          <button
            type="button"
            onClick={() => setRegisterForm(true)}
            className="btn2"
          >
            REGISTER
          </button>
        </div>
      )}
    </section>
  )
}

export default Sign
