import { httpCountriesRequest } from '../../services/httpRequests'
import { useEffect, useState, useReducer, useContext } from 'react'
import MainContext from '../../store/main-context'
import {
  useParams,
  useLocation,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import Country from '../Country/Country'
import ErrorPageComponent from '../Error/ErrorPageComponent'
import { mainLanguages, emptyCountry } from '../../constants'
import './Countries.css'

export default function Countries(props) {
  const ctx = useContext(MainContext)

  const [countriesByCriteria, setCountriesByCriteria] = useState([])
  const [responseError, setResponseError] = useState({})
  const navigate = useNavigate()

  const params = useParams()
  const { pathname } = useLocation()

  const criteria = params.sel
  const baseURL = 'https://restcountries.com/v3.1l'
  const options = {
    method: 'GET',
    url: '',
  }

  let thisId = ''
  let myURL = ''
  let countriesBy = ''
  let requestedCountries = []

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

  function selectionHandler(event) {
    thisId = parseInt(event.target.dataset.identifier)
    dispatchSelectedCountry({
      type: 'COUNTRY SELECTED',
      value: countriesByCriteria[thisId],
    })
  }

  function extractData(data) {
    requestedCountries = data.map(country => ({
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
  }

  function sortCountries(countries) {
    countries.sort(function (a, b) {
      if (a.name.common < b.name.common) {
        return -1
      }
      if (a.name.common > b.name.common) {
        return 1
      }
      return 0
    })
  }

  async function uploadCountries(options) {
    const response = await httpCountriesRequest(options)
    console.log(response)

    if (!response.data) {
      ctx.onSetHttpError(response)
      navigate('/error')
    } else {
      extractData(response.data)
      sortCountries(requestedCountries)
      setCountriesByCriteria(requestedCountries)
      dispatchSelectedCountry({ type: 'UPLOAD LOCAL STORAGE' })
    }
  }

  useEffect(() => {
    uploadCountries(options)
  }, [])

  const [selectedCountry, dispatchSelectedCountry] = useReducer(
    selectedCountryReducer,
  )

  // -----------------------------------RETURN-------------------------------------

  return (
    <>
      {responseError.type === 'ERROR' && (
        <ErrorPageComponent data={responseError} />
      )}
      {!responseError.type && (
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
      )}
    </>
  )
}
