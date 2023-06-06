import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'

function User() {
    
    const {user} = useContext(GithubContext)
    
    useEffect(() => {
        
    })
    
  return (
    <div>User</div>
  )
}

export default User