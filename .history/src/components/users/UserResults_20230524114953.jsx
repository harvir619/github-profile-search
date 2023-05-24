import React, { useEffect,useState } from 'react'

function UserResults() {
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
      
      setUsers(data)
      setLoading(false)
    }
  
  if (!loading) {
    return (
      <div className="">
        {users.map((user) => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>    
      )
  } else {
    return <h3>Loading...</h3>
  }
}

export default UserResults