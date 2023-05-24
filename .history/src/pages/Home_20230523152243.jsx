import React, { useEffect } from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
    useEffect(() => {
      fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`,
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      )
      
      
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