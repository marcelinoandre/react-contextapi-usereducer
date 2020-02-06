import React, { useContext } from 'react'
import AuthContext from './contexts/Auth/Context'
import * as authActions from './contexts/Auth/actions'

function App () {
  const { isLogedIn, loginDispatch } = useContext(AuthContext)

  const handleLogout = () => {
    loginDispatch(authActions.logout)
  }

  const handleLogin = () => {
    loginDispatch(authActions.login)
  }

  return (
    <div className='App'>
      <h1>O usuário está logado?</h1>
      <h2>{isLogedIn ? 'Sim' : 'Não'} </h2>
      <p>{
        isLogedIn
          ? <button onClick={handleLogout}>Deslogar</button>
          : <button onClick={handleLogin}>Logar</button>
      }
      </p>
    </div>
  )
}

export default App
