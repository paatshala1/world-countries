import { Outlet } from 'react-router-dom'
import './App.css'
import axiosInterceptor from './utilities/axios.interceptor'

function App() {
  return (
    <>
      <div className=' h-screen min-h-screen w-screen place-content-center bg-white opacity-90'>
        <Outlet />
      </div>
    </>
  )
}

export default App
