/* eslint-disable import/no-absolute-path */
import MainContext from '../../store/main-context'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import iflixLogo from '/images/logo.png'
import './Entrance.css'
import '../../App.css'

export default function Entrance() {
  const ctx = useContext(MainContext)
  useEffect(() => {
    localStorage.removeItem('is-logged')
  }, [])

  return (
    <div className='App'>
      <NavLink to='home' onClick={ctx.onLogIn}>
        <img src={iflixLogo} className='logo iflix' alt='iFlix logo'></img>
      </NavLink>
      <h1>Know your world...</h1>
    </div>
  )
}
