import React, { useState } from 'react';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8001/register';
    try {
      const result = await axios.post(url, {
        firstName,
        lastName,
        email,
        password,
      });
      toast.success(result.data.message);
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <section className="registerForm">
      <div className="formDiv">
        <form onSubmit={submit}>
          <h2>CUSTOMER REGISTER</h2>
          <div className="inpt">
            <FaUser />
            <input
              type="text"
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
        <Link to="/login" className="link">LOGIN</Link>
      </div>
    </section>
  );
};

export default Register;
