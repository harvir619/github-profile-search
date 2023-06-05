import React, { useContext } from 'react'
import AlertContext from '../../context/github/alert/AlertContext'



function Alert() {
    
    const { alert } = useContext(AlertContext)
    
    
    return alert !== null && (
        <p className='flex items-start mb-4 space-x-2'>
            {alert.type === 'error' && (
                <p>
                    Error
                </p>
            )}
            <p className='p flex-1 text-base font-semibold leading-7 text-white'>
                <strong>
                    {alert.msg}
                </strong>
            </p>
      </p>
  )
}

export default Alert