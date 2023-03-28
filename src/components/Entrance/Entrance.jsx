/* eslint-disable import/no-absolute-path */
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import kywLogo from '/images/logo_world2.png'
import './Entrance.css'
import '../../App.css'

export default function Entrance() {
  useEffect(() => {
    localStorage.removeItem('is-logged')
  }, [])

  return (
    <div className=' grid w-screen place-content-center bg-white opacity-90'>
      <div className=' p-4'>
        <NavLink to='login'>
          <img
            src={kywLogo}
            className='logo iflix hover:cursor-zoom-in'
            alt='KYW logo'
          ></img>
        </NavLink>
        <h1 className='pt-4 text-6xl text-indigo-500'>
          <span className='text-6xl font-bold text-orange-400'>K</span>nowing{' '}
          <span className='text-6xl font-bold text-orange-400'>Y</span>our{' '}
          <span className='text-6xl font-bold text-orange-400'>W</span>
          orld...get in!
        </h1>
        <div className='pt-4'>
          <small className='text-black'>All Rights Reserved</small>
        </div>
      </div>
    </div>
  )
}
