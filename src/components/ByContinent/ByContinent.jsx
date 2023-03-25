import TilesList from '../TilesList/TilesList'
import { continents } from '../../constants'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function ByContinent(props) {
  const data = localStorage.getItem('is-logged')
  const logStatus = JSON.parse(data)

  useEffect(() => localStorage.removeItem('stored-country'))

  return (
    <>
      {logStatus ? (
        <TilesList elements={continents} section='Continent' />
      ) : (
        <NavLink to='/' />
      )}
    </>
  )
}
