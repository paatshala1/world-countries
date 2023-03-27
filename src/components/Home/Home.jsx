/* eslint-disable import/no-absolute-path */
import SearchForm from '../SearchForm/SearchForm'
import { useEffect } from 'react'
// import mapaMundi from '/images/mapaMundiAlphaChannel.png'
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
          <div className=' mb-8'>
            <img
              src='https://asset.cloudinary.com/duwwpsl5r/a91188d2e284948b1ce1c7b6226affb8'
              className='my-0 mx-auto  w-96 rounded-full opacity-60 '
              alt='Mapa Mundi'
            />
          </div>
          <SearchForm />
        </>
      )}
    </section>
  )
}
