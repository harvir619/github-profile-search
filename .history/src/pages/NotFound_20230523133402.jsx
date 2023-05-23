import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
      <div className='hero'>
          <div className="text-center hero-content text-5xl mb-8 font-bold">
              404 - Page not found <FaHome/>
          </div>
      </div>
  )
}

export default NotFound