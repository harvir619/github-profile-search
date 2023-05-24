import React from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
      <div>
          <h1 className='text-6xl'>Welcome</h1>
          {/* ${import.meta.env.VITE_GITHUB_TOKEN} */}
          <UserResults/>
    </div>
  )
}

export default Home