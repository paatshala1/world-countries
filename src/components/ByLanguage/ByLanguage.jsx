import TilesList from '../TilesList/TilesList'
import { mainLanguages } from '../../constants'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function ByLanguage() {
  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  useEffect(() => localStorage.removeItem('stored-country'))

  return (
    <>
      {logStatus ? (
        <TilesList elements={mainLanguages} section='Language' sample={5} />
      ) : (
        <NavLink to='/' />
      )}
    </>
  )
}
