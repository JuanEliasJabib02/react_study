import React from 'react'

const Login = ({setIsLogged}) => {
  
  return (
    <div>
      <button onClick={() => setIsLogged(true)}>Login</button>
    </div>
   
  )
}

export default Login