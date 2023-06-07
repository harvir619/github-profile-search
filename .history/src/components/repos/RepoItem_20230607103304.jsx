import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({repo}) {
  return (
            <div>
            <h3>{repo.name}</h3>
            </div>
  )
}

RepoItem.PropTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem