import PropTypes from 'prop-types'

function UserItem({user:{login,avatar_url}}) {
  return (
      <div className='card'>
           <h3>{login}</h3>
    </div>
    )
    
    

}


    UserItem.propTypes= {
    user: PropTypes.object.isRequired
    }
export default UserItem


