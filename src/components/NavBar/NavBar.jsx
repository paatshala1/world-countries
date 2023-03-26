/* eslint-disable import/no-absolute-path */
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import MainContext from '../../store/main-context'
import iflixLogo from '/images/logo.png'
import './NavBar.css'

export default function NavBar() {
  const ctx = useContext(MainContext)

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)
  return (
    <>
      <div className='flex flex-row justify-between mb-2 bg-blue-500 p-4'>
        {logStatus ? (
          <div className='nav-container__head'>
            <NavLink to='home'>
              <img src={iflixLogo} className='logo nav-bar' alt='iFlix logo' />
            </NavLink>
            <pre className='text-2xl'>
              World
              <br />
              Countries
            </pre>
          </div>
        ) : null}

        {logStatus ? (
          <ul className='nav-container__options'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'selected' : '')}
                to='/home'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'selected' : '')}
                to='continent'
              >
                By Continent
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'selected' : '')}
                to='language'
              >
                By Language
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'selected' : '')}
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
