/* eslint-disable import/no-absolute-path */
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import MainContext from '../../store/main-context'
import kywLogo from '/images/logo_world2.png'
import './NavBar.css'

export default function NavBar() {
  const ctx = useContext(MainContext)

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)
  return (
    <>
      <div className='flex flex-row justify-between bg-indigo-900 p-4'>
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
                <span className='text-3xl font-bold text-orange-600'>K</span>{' '}
                now
              </p>
              <p className='text-2xl'>
                <span className='text-3xl font-bold text-orange-600'>Y</span>{' '}
                our
              </p>
              <p className='text-2xl'>
                <span className='text-3xl font-bold text-orange-600'>W</span>{' '}
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
            className='my-flex-grow-1 flex flex-grow flex-row justify-evenly'
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-3xl text-orange-600 ' : ''
                }
                to='/home'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-3xl text-orange-600' : ''
                }
                to='continent'
              >
                By Continent
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-3xl text-orange-600' : ''
                }
                to='language'
              >
                By Language
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-3xl text-orange-600' : ''
                }
                to='about'
              >
                About
              </NavLink>
            </li>
            <li>
              <div>
                <NavLink to='/' onClick={ctx.onLogOut}>
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
