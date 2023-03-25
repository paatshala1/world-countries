/* eslint-disable import/no-absolute-path */
import SearchBar from '../Search/Search'
import { useEffect } from 'react'
import mapaMundi from '/images/mapa-mundi.jpg'
import { NavLink } from 'react-router-dom'

export default function Home() {
  useEffect(() => localStorage.removeItem('stored-country'))

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  return (
    <>
      {!logStatus ? (
        <NavLink to='/' />
      ) : (
        <>
          <div className='logo__circle'>
            <img src={mapaMundi} className='logo' alt='Mapa Mundi' />
          </div>
          <SearchBar />
        </>
      )}
    </>
  )
}
