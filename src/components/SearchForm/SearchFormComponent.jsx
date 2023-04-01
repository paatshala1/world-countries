import { httpCountriesRequest } from '../../services/httpRequests'
import LogoComponent from '../UI/LogoComponent/LogoComponent'
import ButtonComponent from '../UI/Button/ButtonComponent'
import MainContext from '../../store/main-context'
import { useForm, useFormState } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export default function SearchFormComponent() {
  const ctx = useContext(MainContext)
  const navigate = useNavigate()
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
    getFieldState,
    trigger,
    watch,
    formState: { errors, isDirty, dirtyFields },
    setValue,
  } = useForm({
    defaultValues: {
      country: '',
      capital: '',
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
    const urlToRequest = baseURL + data.criteria + '/' + data.searcher.trim()
    options.url = urlToRequest
    console.log(options)
    const response = await httpCountriesRequest(options)
    if (!response.data) {
      ctx.onSetHttpError(response)
      navigate('/error')
    } else {
      console.log(response)
      // extractData(response.data)
      // sortCountries(requestedCountries)
      // setCountriesByCriteria(requestedCountries)
      // dispatchSelectedCountry({ type: 'UPLOAD LOCAL STORAGE' })
    }
  }

  return (
    <div className='col-start-2 col-end-4 mt-8 grid max-w-2xl  grid-cols-2 justify-self-center shadow-md shadow-stone-200'>
      <section className=' bg-indigo-500 p-4'>
        <div className=' mb-6 grid content-center'>
          <LogoComponent />
        </div>
        <div>
          <p className=' mb-1'>
            There is several options to search for any country.
          </p>
          <p className=' mb-1'>
            It is possible to search for its name or capital, to do that just go
            to the right-hand section.
          </p>
          <p className=' mb-1'>
            You can also navigate through the menu at top of page to start your
            travel...it is a great idea to discover new countries.
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
            Type at least 3 characters.
          </li>
          <li className=' list-disc text-xs text-indigo-600'>Click search.</li>
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
                required: { value: true, message: 'You must select an option' },
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
                required: { value: true, message: 'You must select an option' },
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
            minLength: { value: 3, message: 'Min length 3' },
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
            <ButtonComponent label='Search' />
          </div>
        </div>
      </form>
    </div>
  )
}
