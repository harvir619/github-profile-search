import React, { useEffect } from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
    useEffect(() => {
        
    }, [])
    
    const fetchUsers = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`)
    }
    
  return (
      <>
          <h1 className='text-6xl'>Welcome</h1>
          {/* ${import.meta.env.VITE_GITHUB_TOKEN} */}
          <UserResults/>
    </>
  )
}

export default Home