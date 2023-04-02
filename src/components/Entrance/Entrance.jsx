/* eslint-disable import/no-absolute-path */
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Entrance.css'
import '../../App.css'

export default function Entrance() {
  useEffect(() => {
    localStorage.removeItem('is-logged')
  }, [])

  return (
    <div className=' w-screen place-content-center bg-indigo-50 opacity-90'>
      <div className=' my-grid-rows grid p-4 py-8'>
        <div className='my-grid-title text-center text-indigo-500'>
          <h1 className='text-6xl font-bold'>
            Find information about whole world countries
          </h1>
          <p>Just click to dive into it</p>
        </div>
        <NavLink
          to='login'
          className=' my-grid-body my-bg-image-logo logo grid justify-center border-solid border-indigo-500 '
        >
          {/* <img src={kywLogo} className='logo ' alt='KYW logo'></img> */}
        </NavLink>
        <h2 className='my-grid-footer pt-4 text-center text-6xl text-indigo-500'>
          <span className='text-6xl font-bold text-orange-400'>K</span>now{' '}
          <span className='text-6xl font-bold text-orange-400'>Y</span>our{' '}
          <span className='text-6xl font-bold text-orange-400'>W</span>
          orld...get in!
        </h2>
      </div>
    </div>
  )
}
