import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
    
    const {
        name, description, html_url,
        forks, open_issues, watchers_count,
        stargazers_count} = repo
    
  return (
            <div>
            <h3>{name}</h3>
            </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem