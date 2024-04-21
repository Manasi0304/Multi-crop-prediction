import React from 'react'

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return <div></div>
}

export default Logout
