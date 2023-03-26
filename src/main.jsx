import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MainContextProvider } from './store/main-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <div className='bg-blue-200 min-h-screen grid place-content-center w-screen'>
        <App />
      </div>
    </MainContextProvider>
  </React.StrictMode>,
)
