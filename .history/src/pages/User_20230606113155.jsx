import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'
import { Link, useParams } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'

function User() {
    
    const {user,getUser} = useContext(GithubContext)
    const params = useParams()
    
    useEffect(() => {
        getUser(params.login)
    },[])
    
  return (
      <div>
          <div> {user.login}</div>
          <img src={user.avatar_url} alt="" />
          <p>{user.bio}</p>
          <FaCodepen />
          <FaStore />
          <FaUserFriends />
          <FaUsers />
          <Link to={`/user/${user.login}`} className='btn btn-ghost'>Visit Github</Link>
      </div>
     
  )
}

export default User