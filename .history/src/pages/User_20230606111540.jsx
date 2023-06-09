import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'
import { useParams } from 'react-router-dom'

function User() {
    
    const {user,getUser} = useContext(GithubContext)
    const params = useParams()
    
    useEffect(() => {
        getUser(params.login)
    },[])
    
  return (
      <div>{user }</div>
  )
}

export default User