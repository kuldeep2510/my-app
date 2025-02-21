import React from 'react'

function Alert(prop) {
  return (
    

         prop.alert &&   <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{prop.alert.type}</strong>:{prop.alert.msg}
         
         
            </div>
      
   
  )
}

export default Alert
 