import React from 'react'
import PropTypes from 'prop-types'

function RepoList({repos}) {
  return (
      <div>{repos }</div>
  )
}

RepoList.PropTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList