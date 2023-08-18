import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/index.scss'
import './sass/theme.scss'
import AppContext from './context/appContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
)
