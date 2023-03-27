/* eslint-disable import/no-absolute-path */
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import MainContext from '../../store/main-context'
import kywLogo from '/images/logo_world2.png'
import './NavBar.css'
import { menuOptions } from '../../constants'

export default function NavBar() {
  const ctx = useContext(MainContext)

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)
  return (
    <>
      <div className=' sticky top-0 z-10 mb-12 flex w-screen flex-row justify-between bg-indigo-600 p-4 px-20'>
        {logStatus ? (
          // Just keeping cutomized className to use the @apply from tailwind
          <div
            name='menu-head-container'
            className='my-flex-grow-4 flex flex-row justify-start'
          >
            <NavLink to='home'>
              <img
                src={kywLogo}
                className='logo my-max-w-150 w-2/3'
                alt='KYW logo'
              />
            </NavLink>
            <div className='flex flex-col'>
              <p className='text-2xl'>
                <span className='text-3xl font-bold text-orange-400'>K</span>{' '}
                now
              </p>
              <p className='text-2xl'>
                <span className='text-3xl font-bold text-orange-400'>Y</span>{' '}
                our
              </p>
              <p className='text-2xl'>
                <span className='text-3xl font-bold text-orange-400'>W</span>{' '}
                orld
              </p>
            </div>
            {/* <pre className=''>
              World
              <br />
              Countries
            </pre> */}
          </div>
        ) : null}

        {logStatus ? (
          <ul
            name='menu-options-container'
            className='my-flex-grow-1 flex flex-grow flex-row content-center justify-evenly'
          >
            {menuOptions.map(option => {
              return (
                <li key={option.path} className=' flex items-center'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-3xl text-orange-400 ' : ''
                    }
                    to={`/${option.path}`}
                  >
                    {option.label}
                  </NavLink>
                </li>
              )
            })}

            <li className=' flex items-center'>
              <div>
                <NavLink to='/login' onClick={ctx.onLogOut}>
                  Log out
                </NavLink>
              </div>
            </li>
          </ul>
        ) : null}
      </div>

      <Outlet />
    </>
  )
}
