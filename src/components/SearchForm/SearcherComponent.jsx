import { httpCountriesRequest } from '../../services/httpRequests'
import LogoComponent from '../UI/LogoComponent/LogoComponent'
import ButtonComponent from '../UI/Button/ButtonComponent'
import { useForm, useFormState } from 'react-hook-form'
import { useState } from 'react'

export default function SearcherComponent() {
  let optionSelected = ''
  const baseURL = 'https://restcountries.com/v3.1/'
  const options = {
    method: 'GET',
    url: '',
  }

  const {
    control,
    register,
    handleSubmit,
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

  // const [countryClicked, setCountryClicked] = useState()

  const { touchedFields } = useFormState({ control })

  console.log(errors)
  // console.log(watch('searcher'))

  // console.log(touchedFields)
  // console.log(dirtyFields)
  // console.log(getFieldState('country').invalid)

  function onSubmitHandler(data) {
    console.log(data)
    // optionSelected = event.target.value
    const urlToRequest = baseURL + data.search + '/' + data.searcher.trim()
    options.url = urlToRequest
    console.log(options)
  }

  // function selectionHandler(event) {
  //   console.log(options.url)
  // }

  return (
    <div className='grid max-w-2xl grid-cols-2 shadow-md shadow-stone-200'>
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
