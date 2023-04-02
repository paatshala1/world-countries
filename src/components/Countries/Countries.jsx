import { httpCountriesRequest } from '../../services/httpRequests'
import { useEffect, useState, useReducer, useContext, useRef } from 'react'
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
import { mainLanguages, emptyCountry } from '../../constants'
import './Countries.css'

export default function Countries(props) {
  const ctx = useContext(MainContext)

  const [countriesByCriteria, setCountriesByCriteria] = useState([])
  const resultRef = useRef(null)

  const navigate = useNavigate()

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

  const [selectedCountry, dispatchSelectedCountry] = useReducer(
    selectedCountryReducer,
    emptyCountry,
  )

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

  function goToResult() {
    if (selectedCountry !== emptyCountry) resultRef.current.focus()
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

  useEffect(() => {
    goToResult()
  }, [selectedCountry])

  // -----------------------------------RETURN-------------------------------------

  return (
    <>
      <div className='grid grid-cols-12'>
        <div id='start' className=' col-start-2 col-end-12 '>
          {countriesBy}
        </div>
        <ul className=' col-start-2 col-end-12 mb-8 flex flex-wrap gap-2'>
          {countriesByCriteria.map((country, index) => {
            const myIndex = index.toString()
            return (
              <li key={index}>
                <NavLink to={country.name.common}>
                  <button onClick={selectionHandler} data-identifier={myIndex}>
                    {country.name.common}
                  </button>
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
        <div className=' col-start-2 col-end-12  flex '>
          <a
            href='#start'
            ref={resultRef}
            className='my-2 mx-auto  mb-3  border-2 border-orange-600 py-2 px-4 text-indigo-600 hover:bg-orange-100 '
          >
            Go up
          </a>
        </div>
      </div>
    </>
  )
}
