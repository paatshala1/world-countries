/* eslint-disable import/no-absolute-path */
import SearchForm from '../SearchForm/SearchForm'
import { useEffect } from 'react'
import mapaMundi from '/images/mapaMundiAlphaChannel.png'
import { NavLink } from 'react-router-dom'

export default function Home() {
  useEffect(() => localStorage.removeItem('stored-country'))

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  return (
    <section>
      {!logStatus ? (
        <NavLink to='/' />
      ) : (
        <>
          <h1 className='px-10 text-center text-indigo-600'>
            You can search for any country by name, capital or contry code
          </h1>
          <p className='text-center text-indigo-600'>
            ...even with partial match
          </p>
          <div className=' pt-6'>
            <img
              src={mapaMundi}
              className='my-0 mx-auto  mt-7 w-96 rounded-full opacity-60'
              alt='Mapa Mundi'
            />
          </div>
          <SearchForm />
        </>
      )}
    </section>
  )
}
