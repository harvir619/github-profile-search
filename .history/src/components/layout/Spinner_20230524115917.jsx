import React from 'react'
import Spinner from '../../assets/spinner.gif'

function Spinner() {
  return (
      <div className='w-100 mt-20'>
          <img src={Spinner} alt="Loading..." width={180} className='text-center mx-auto' />
    </div>
  )
}

export default Spinner