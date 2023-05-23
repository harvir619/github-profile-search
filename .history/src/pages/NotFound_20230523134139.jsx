import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
      <div className='hero'>
          <div className="text-center hero-content ">
              <div className="max-w-lg">
                <h1 className='text-5xl mb-8 font-bold'>404 - Page not found</h1>  
                <Link to="/"
                    className="btn btn-dark btn-lg">
                    <FaHome className="mr-2" />
                    Back to Home
                </Link>
                  
              </div>
          </div>
          
      </div>
  )
}

export default NotFound