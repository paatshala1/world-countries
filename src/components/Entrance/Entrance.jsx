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
        <img src={kywLogo} className='logo iflix' alt='KYW logo'></img>
      </NavLink>
      <h1 className='text-6xl text-sky-800'>
        <span className='text-6xl font-bold text-orange-600'>K</span>now{' '}
        <span className='text-6xl font-bold text-orange-600'>Y</span>our{' '}
        <span className='text-6xl font-bold text-orange-600'>W</span>orld...get
        in!
      </h1>
      <div className='absolute bottom-3 left-5'>
        <small className='text-black'>All Rights Reserved</small>
      </div>
    </div>
  )
}
