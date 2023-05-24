import React, { useEffect,useState } from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }
      )
      const data = await response.json()
      
      console.log(data)
      
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