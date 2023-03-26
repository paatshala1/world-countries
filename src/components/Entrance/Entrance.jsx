/* eslint-disable import/no-absolute-path */
import MainContext from '../../store/main-context'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import kywLogo from '/images/logo_world2.png'
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
        <img src={kywLogo} className='logo iflix' alt='iFlix logo'></img>
      </NavLink>
      <h1 className='text-sky-800 text-6xl'>
        <span className='text-orange-600 text-6xl font-bold'>K</span>now{' '}
        <span className='text-orange-600 text-6xl font-bold'>Y</span>our{' '}
        <span className='text-orange-600 text-6xl font-bold'>W</span>orld...get
        in!
      </h1>
      <div className='absolute bottom-3 left-5'>
        <small className='text-black'>All Rights Reserved</small>
      </div>
    </div>
  )
}
