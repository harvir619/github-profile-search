import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
    
    const {
        name, description, html_url,
        forks, open_issues, watchers_count,
        stargazers_count} = repo
    
  return (
            <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
            <h3>{name}</h3>
            </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem