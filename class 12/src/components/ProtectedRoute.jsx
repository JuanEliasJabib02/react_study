import React from 'react'

import {Outlet, Navigate} from "react-router-dom"

const ProtectedRoute = ({isLogged}) => {

  if (isLogged) {
    return (
      <Outlet/>
   )
  } else  {
    return (
      < Navigate to="/blocked" />
    )
 }
}

export default ProtectedRoute