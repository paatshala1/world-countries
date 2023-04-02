import { httpCountriesRequest } from '../../services/httpRequests'
import LogoComponent from '../UI/LogoComponent/LogoComponent'
import ButtonComponent from '../UI/Button/ButtonComponent'
import MainContext from '../../store/main-context'
import { useForm, useFormState } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { extractData, sortCountries } from '../../services/dataPreprocessing'

export default function SearchFormComponent(props) {
  let requestedCountries = []

  const [notResults, setNotResults] = useState(false)
  const [countriesByCriteria, setCountriesByCriteria] = useState([])

  const ctx = useContext(MainContext)
  const baseURL = 'https://restcountries.com/v3.1/'
  const options = {
    method: 'GET',
    url: '',
  }

  const {
    control,
    register,
    handleSubmit,
    reset,
    // getFieldState,
    // trigger,
    // watch,
    formState: {
      errors,
      // isDirty,
      // dirtyFields ,
    },
    // setValue,
  } = useForm({
    defaultValues: {
      // country: '',
      criteria: 'name',
      searcher: '',
    },
  })

  const { touchedFields } = useFormState({ control })

  // console.log(errors)
  // console.log(watch('criteria'))
  // console.log(touchedFields)
  // console.log(dirtyFields)
  // console.log(getFieldState('country').invalid)

  async function onSubmitHandler(data) {
    if (touchedFields.searcher) props.selectedCountry(null)

    const urlToRequest = baseURL + data.criteria + '/' + data.searcher.trim()
    options.url = urlToRequest
    const response = await httpCountriesRequest(options)
    if (!response.data) {
      ctx.onSetHttpError(response)
      setNotResults(true)
      // navigate('/error')
    } else {
      reset()
      requestedCountries = extractData(response.data)
      sortCountries(requestedCountries)
      setCountriesByCriteria(requestedCountries)
      setNotResults(false)
    }
  }

  function selectionHandler(event) {
    const thisId = parseInt(event.target.dataset.identifier)
    const country = countriesByCriteria[thisId]
    props.selectedCountry(country)
  }

  return (
    <>
      <div className='col-start-2 col-end-9 mt-8 grid  grid-cols-3  justify-self-center text-white '>
        <section className=' bg-indigo-500 p-4'>
          <div className=' mb-6 grid content-center'>
            <LogoComponent />
          </div>
          <div>
            <p className=' mb-2'>
              There is several options to search for any country.
            </p>
            <p className=' mb-2'>
              It is possible to search for its name or capital, to do that just
              go to the right-hand section.
            </p>
            <p className=' mb-2'>
              You can also navigate through the menu at top of page to start
              your travel...it is a great idea to discover new countries.
            </p>
            <p className=' mb-2'>
              -- Note: All seaches are preformed in english.
            </p>
          </div>
        </section>

        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className=' grid gap-2 bg-zinc-50 p-8'
        >
          <ul className=' pl-4'>
            <li className=' list-disc text-xs text-indigo-600'>
              Select a criteria to search for.
            </li>
            <li className=' list-disc text-xs text-indigo-600'>
              Type at least 4 characters.
            </li>
            <li className=' list-disc text-xs text-indigo-600'>
              Click search.
            </li>
          </ul>

          <div className='grid grid-cols-5 content-center '>
            <div className='grid content-center'>
              <input
                type='radio'
                name='criteria'
                value='name'
                id='country'
                className=' my-radio-centered relative h-5 w-5'
                {...register('criteria', {
                  required: {
                    value: true,
                    message: 'You must select an option',
                  },
                })}
              />
            </div>
            <label htmlFor='criteria' className=' text-2xl text-indigo-600 '>
              Country
            </label>
          </div>

          <div className='grid grid-cols-5 content-center '>
            <div className='grid content-center'>
              <input
                type='radio'
                name='criteria'
                value='capital'
                id='capital'
                className=' my-radio-centered relative h-5 w-5'
                {...register('criteria', {
                  required: {
                    value: true,
                    message: 'You must select an option',
                  },
                })}
              />
            </div>
            <label htmlFor='capital' className=' text-2xl text-indigo-600 '>
              Capital
            </label>
          </div>

          <input
            type='input'
            name='searcher'
            id='searcher'
            className='rounded-md bg-indigo-200 pl-2 text-indigo-600'
            {...register('searcher', {
              required: 'You must type any criteria to search for',
              minLength: { value: 4, message: 'Min length 4' },
            })}
          />
          {errors.searcher && (
            <p className=' pl-2 text-xs text-red-700'>
              {errors?.searcher.message}
            </p>
          )}
          {errors?.criteria && (
            <p className=' pl-2 text-xs text-red-700'>
              {errors?.criteria?.message}
            </p>
          )}

          <div className='mt-2 grid grid-cols-3 content-center'>
            <div className=' col-start-1 col-end-4'>
              <ButtonComponent label='Search' type='submit' />
            </div>
          </div>
        </form>
        {notResults && (
          <div className=' p-4 '>
            <p className=' bg-orange-100  p-4 text-lg text-indigo-600 shadow-md'>
              There is no results for these criterias, please try another
              combination...or maybe a smaller text.
            </p>
          </div>
        )}

        {!notResults && (
          <ul className=' grid grid-cols-2 flex-col content-center gap-4 p-4 '>
            {countriesByCriteria.map((country, index) => {
              const myIndex = index.toString()
              return (
                <li
                  key={index}
                  className=' grid content-center self-stretch text-lg text-indigo-600'
                >
                  <NavLink className=''>
                    <button
                      onClick={selectionHandler}
                      data-identifier={myIndex}
                      className=' border-2 border-orange-400 bg-transparent text-orange-600 transition-colors hover:translate-x-1 hover:translate-y-1 hover:bg-orange-100 active:bg-orange-100'
                    >
                      {country.name.common}
                    </button>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}
