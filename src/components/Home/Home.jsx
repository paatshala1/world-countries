/* eslint-disable import/no-absolute-path */
import SearchFormComponent from '../SearchForm/SearchFormComponent'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  useEffect(() => localStorage.removeItem('stored-country'))

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  return (
    <section className=' grid grid-cols-9 '>
      {!logStatus ? (
        <NavLink to='/' />
      ) : (
        <>
          <h1 className='col-start-2 col-end-9 px-10 text-center text-indigo-600'>
            You can search for any country by name, capital or contry code
          </h1>
          <p className='col-start-2 col-end-9 text-center text-indigo-600'>
            ...even with partial match
          </p>
          {/* <div className=' col-start-2 col-end-4 pt-6'>
            <img
              src={mapaMundi}
              className='my-0 mx-auto  mt-7 w-1/4 rounded-full opacity-60'
              alt='Mapa Mundi'
            />
          </div> */}
          <SearchFormComponent />
        </>
      )}
    </section>
  )
}
