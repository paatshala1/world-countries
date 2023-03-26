import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MainContextProvider } from './store/main-context'

// Classes to wrap App: min-h-screen grid place-content-center w-screen

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <div className='grid min-h-screen w-screen place-content-center bg-indigo-900'>
        <App />
      </div>
    </MainContextProvider>
  </React.StrictMode>,
)
