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
    
    const { name, type, avatar_url,
        location, bio, twitter_username,
        login, html_url, followers,
        following, public_repos,
        public_gists, hireable } = user
    
    if (loading) {
        return <Spinner/>
    } else {
 return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User