/* eslint-disable import/no-absolute-path */
import SearchFormComponent from '../SearchForm/SearchFormComponent'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Country from '../Country/Country'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  useEffect(() => localStorage.removeItem('stored-country'))

  const resultRef = useRef(null)

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  function onSelectedCountry(country) {
    setSelectedCountry(country)
    resultRef.current.focus()
  }

  return (
    <>
      <section id='home' className=' grid grid-cols-9 '>
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
            <SearchFormComponent selectedCountry={onSelectedCountry} />
          </>
        )}
      </section>
      {selectedCountry !== null && (
        <div className=' my-12 mx-auto mb-3 w-2/3'>
          <Country country={selectedCountry} />
        </div>
      )}
      <div className=' flex'>
        <a
          href='#home'
          ref={resultRef}
          className=' my-0 mx-auto mb-6 border-orange-600 text-indigo-600'
        >
          Go up
        </a>
      </div>
      <div id='selected' className='text-white'>
        herm
      </div>
    </>
  )
}
