/* eslint-disable import/no-absolute-path */
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import kywLogo from '/images/logo_world2.png'
import MainContext from '../../store/main-context'

export default function Log2() {
  const ctx = useContext(MainContext)

  return (
    <div className='rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8'>
      <div className='text-white'>
        <div className='mb-8 flex flex-col items-center'>
          <img src={kywLogo} width='150' alt='' srcSet='' />
          <h1 className='mt-6 text-6xl text-white'>
            <span className='text-6xl font-bold text-orange-600'>K</span>now{' '}
            <span className='text-6xl font-bold text-orange-600'>Y</span>our{' '}
            <span className='text-6xl font-bold text-orange-600'>W</span>
            orld...get in!
          </h1>
          <span className='text-gray-300'>Enter Login Details</span>
        </div>
        <form action='#'>
          <div className='mb-4 text-lg'>
            <input
              className='rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md'
              type='text'
              name='name'
              placeholder='id@email.com'
            />
          </div>

          <div className='mb-4 text-lg'>
            <input
              className='rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md'
              type='Password'
              name='name'
              placeholder='*********'
            />
          </div>
          <div className='mt-8 flex justify-center text-lg text-black'>
            <NavLink to='/home' onClick={ctx.onLogIn}>
              <button
                onClick={ctx.onLogIn}
                type='button'
                className='rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600'
              >
                Login
              </button>
            </NavLink>
          </div>
          <div className='mt-8 flex justify-center text-lg text-black underline'>
            <NavLink to='/'>Leave</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}
