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
                <>
                  <div className="w-full mx-auto lg:w-10/12">
                      
                    </div>
                </>
          )
    }
    

}

export default User