import React from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import { MdOutlineLockReset } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Register = () => {
  return (
    <form>
      <h2>CUSTOMER REGISTER</h2>

      <div className="inpt">
        <FaUser />
        <input
          type="text"
          name="firstName"
          placeholder="Your First Name"
          fullWidth
        />
      </div>
      <div className="inpt">
        <FaUser />
        <input type="text" name="lastName" placeholder="Your Last Name" />
      </div>

      <div className="inpt">
        <MdEmail />
        <input type="email" name="email" placeholder="Your Email" />
      </div>
      <div className="inpt">
        <FaUnlockAlt />
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div className="inpt">
        <MdOutlineLockReset style={{ fontSize: '1.4rem' }} />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      <button type="submit" className="btn2">
        REGISTER
      </button>
    </form>
  )
}

export default Register