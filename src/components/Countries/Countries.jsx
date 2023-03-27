import Country from '../Country/Country'

import { useEffect, useState, useReducer } from 'react'
import {
  useParams,
  useLocation,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom'
import './Countries.css'
import { mainLanguages, emptyCountry } from '../../constants'
import axios from 'axios'

export default function Countries(props) {
  const [countriesByCriteria, setCountriesByCriteria] = useState([])

  const params = useParams()
  const { pathname } = useLocation()

  const criteria = params.sel
  const baseURL = 'https://restcountries.com/v3.1'
  const options = {
    method: 'GET',
    url: '',
  }

  let thisId = ''

  let myURL = ''

  let countriesBy = ''

  if (pathname.includes('cont')) {
    countriesBy = <h3>Countries of: {criteria.toUpperCase()}</h3>
    myURL = '/region/' + criteria
  } else if (pathname.includes('lang')) {
    const myLang = mainLanguages.filter(
      (lang, index) => lang.code === params.sel,
    )
    countriesBy = <p>Countries speaking: {myLang[0].name.toUpperCase()}</p>
    myURL = '/lang/' + criteria
  } else {
    countriesBy = <h1>ERROR!!</h1>
  }

  options.url = baseURL + myURL

  function selectionHandler(event) {
    thisId = parseInt(event.target.dataset.identifier)
    dispatchSelectedCountry({
      type: 'COUNTRY SELECTED',
      value: countriesByCriteria[thisId],
    })
  }

  function selectedCountryReducer(state, action) {
    let storedValue
    switch (action.type) {
      case 'COUNTRY SELECTED':
        localStorage.setItem('stored-country', JSON.stringify(action.value))
        return action.value

      case 'COUNTRY STORED':
        return action.value

      case 'UPLOAD LOCAL STORAGE':
        storedValue = localStorage.getItem('stored-country')
        storedValue = JSON.parse(storedValue)

        if (storedValue) return storedValue
        break

      default:
        return emptyCountry
    }
  }

  function uploadCountries() {
    axios
      .request(options)
      .then(res => {
        const requestedCountries = res.data.map(country => ({
          area: country.area,
          borders: country.borders,
          capital: country.capital,
          code: country.cioc,
          currencies: country.currencies,
          driving: country.car.side,
          flags: country.flags,
          languages: country.languages,
          maps: country.maps,
          name: country.name,
          population: country.population,
          subregion: country.subregion,
          timezones: country.timezones,
        }))
        // console.log(requestedCountries[0])
        setCountriesByCriteria(requestedCountries)
      })
      .catch(err => console.log(err))
    dispatchSelectedCountry({ type: 'UPLOAD LOCAL STORAGE' })
  }

  useEffect(uploadCountries, [])

  const [selectedCountry, dispatchSelectedCountry] = useReducer(
    selectedCountryReducer,
  )

  // -----------------------------------RETURN-------------------------------------

  return (
    <div className='result'>
      <div className='result-title'>{countriesBy}</div>
      <ul className='result-tiles'>
        {countriesByCriteria.map((country, index) => {
          const myIndex = index.toString()
          return (
            <li key={index}>
              <NavLink to={country.name.common}>
                <button
                  onClick={selectionHandler}
                  data-identifier={myIndex}
                >{` ${country.name.common} `}</button>
              </NavLink>
            </li>
          )
        })}
      </ul>
      {selectedCountry && (
        <Routes>
          <Route
            path='/:country'
            element={<Country country={selectedCountry} />}
          />
        </Routes>
      )}
    </div>
  )
}
