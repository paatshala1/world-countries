/* eslint-disable import/no-absolute-path */

import { NavLink } from 'react-router-dom'
import kywLogo from '/images/logo_world2.png'

export default function LogoComponent(props) {
  return (
    <div
      name='reusable-logo'
      className='grid w-4/5 grid-cols-2 content-center bg-indigo-500'
    >
      <NavLink to='/app/home' className='grid content-center'>
        <div className='grid justify-items-center'>
          <img src={kywLogo} className='logo w-3/4 ' alt='KYW logo ' />
        </div>
      </NavLink>
      <div className=' grid '>
        <p className='text-2xl'>
          <span className='text-3xl font-bold text-orange-400'>K</span> now
        </p>
        <p className='text-2xl'>
          <span className='text-3xl font-bold text-orange-400'>Y</span> our
        </p>
        <p className='text-2xl'>
          <span className='text-3xl font-bold text-orange-400'>W</span> orld
        </p>
      </div>
    </div>
  )
}
