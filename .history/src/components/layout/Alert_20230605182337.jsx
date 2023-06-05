import React, { useContext } from 'react'
import AlertContext from '../../context/github/alert/AlertContext'



function Alert() {
    
    const { alert } = useContext(AlertContext)
    
    
  return (
    <div>Alert</div>
  )
}

export default Alert