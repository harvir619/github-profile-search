import React from 'react'
import PropTypes from 'prop-types'

function UserItem({user}) {
  return (
      <div>
           <h3>{props.user.login}</h3>
    </div>
    )
    
    

}


    UserItem.PropTypes: {
    user: PropTypes.object
    }
export default UserItem


