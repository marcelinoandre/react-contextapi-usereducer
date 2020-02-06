import React, { useReducer } from 'react'

import AuthContext from './Context'
import authReducer from './reducer'

function Provider ({ children }) {
  const [isLogedIn, loginDispatch] = useReducer(authReducer, false)
  const state = {
    isLogedIn,
    loginDispatch
  }
  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

export default Provider
