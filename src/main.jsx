import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MainContextProvider } from './store/main-context'

// Classes to wrap App: min-h-screen grid place-content-center w-screen

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode name='strict'>
    <MainContextProvider name='context'>
      <div
        name='app-container'
        className='grid min-h-screen w-screen place-content-center bg-white opacity-90'
      >
        <App />
      </div>
    </MainContextProvider>
  </React.StrictMode>,
)
