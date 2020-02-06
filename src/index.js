import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AuthProvider from './contexts/Auth/Provider'
import App from './App'

ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'))
