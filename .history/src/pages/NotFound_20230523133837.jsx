import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
<div className='hero'>
  <div className="text-center hero-content text-5xl mb-8 font-bold">
      <h1>404 - Page not found</h1> 
  </div>
  <Link to="/"
      className="btn btn-primary btn-lg">
      <FaHome className="mr-2" />
      Back to Home
  </Link>
</div>
  )
}

export default NotFound