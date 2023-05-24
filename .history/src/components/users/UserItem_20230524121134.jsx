import PropTypes from 'prop-types'

function UserItem({user:{login,avatar_url}}) {
  return (
      <div className='card shadow-md compact side bg-base-100'>
           <h3>{login}</h3>
    </div>
    )
    
    

}


    UserItem.propTypes= {
    user: PropTypes.object.isRequired
    }
export default UserItem


