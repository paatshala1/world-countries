import { Outlet } from 'react-router-dom'
import './App.css'

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
