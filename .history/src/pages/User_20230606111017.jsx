import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'

function User({match}) {
    
    const {user,getUser} = useContext(GithubContext)
    
    useEffect(() => {
        getUser(match.params.login)
    },[])
    
  return (
    <div>User</div>
  )
}

export default User