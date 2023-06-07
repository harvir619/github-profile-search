import React from 'react'
import PropTypes from 'prop-types'
import {FaLink} from 'react-icons/fa'

function RepoItem({ repo }) {
    
    const {
        name, description, html_url,
        forks, open_issues, watchers_count,
        stargazers_count} = repo
    
    return (
            <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
                <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url}>
                        <FaLink /> {name}
                    </a>
                </h3>
                </div>
            </div>
    )
    }

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem