import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='h-screen'>
        <Outlet />
      </div>
    </>
  )
}

export default App
