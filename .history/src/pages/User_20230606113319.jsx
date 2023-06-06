import React, { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'
import { Link, useParams } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'

function User() {
    
    const {user,getUser,loading} = useContext(GithubContext)
    const params = useParams()
    
    useEffect(() => {
        getUser(params.login)
    },[])
    
    if (loading) {
        return <Spinner/>
    }
    
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