import React from 'react'
import PropTypes from 'prop-types'

function RepoList({repos}) {
  return (
      <div className='rounded-lg shadow-lg card bg-base-100'></div>
  )
}

RepoList.PropTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList