/* eslint-disable import/no-absolute-path */
import SearchFormComponent from '../SearchForm/SearchFormComponent'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Country from '../Country/Country'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  useEffect(() => localStorage.removeItem('stored-country'))

  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  function onSelectedCountry(country) {
    setSelectedCountry(country)
  }

  return (
    <>
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
            <SearchFormComponent selectedCountry={onSelectedCountry} />
          </>
        )}
      </section>
      {selectedCountry !== null && (
        <div className=' my-0 mx-auto mb-10 w-2/3'>
          <Country country={selectedCountry} />
        </div>
      )}
      <div className='text-white'>herm</div>
    </>
  )
}
