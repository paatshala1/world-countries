import LogoComponent from '../UI/LogoComponent/LogoComponent'
import ButtonComponent from '../UI/Button/ButtonComponent'
import { useForm, useFormState } from 'react-hook-form'

export default function SearcherComponent() {
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
      phoneCode: '',
    },
  })

  const { touchedFields } = useFormState({ control })

  // console.log(errors)
  // console.log(watch('country'))

  console.log(touchedFields)
  console.log(dirtyFields)
  console.log(getFieldState('country').invalid)

  function onSubmitHandler(data) {
    console.log(data)
  }

  function setFormatError(erorrs) {
    console.log(errors)
  }

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
            It is possible to search for part of its name, capital or phone
            code, to do that just type in the input and click Search.
          </p>
          <p className=' mb-1'>
            Yyou can also navigate through the menu at top of page to start your
            own manual navigation...it is a great idea to discover new
            countries.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className=' grid gap-2 bg-zinc-50 p-8'
      >
        <p className=' text-indigo-600'>
          Type at least 3 characters in any field to help you searching.
        </p>

        <input
          type='text'
          name='country'
          id=''
          className=' rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='  Country'
          {...register('country', {
            required: 'You must type a Country',
            minLength: { value: 3, message: 'Country error' },
          })}
        />
        {touchedFields.country && errors?.country?.message && (
          <p className=' pl-2 text-xs text-red-700'>
            {errors?.country?.message}
          </p>
        )}
        {touchedFields.country && (
          <p className=' pl-2 text-xs text-red-700'>Field touched!</p>
        )}

        <input
          type='text'
          name='capital'
          id=''
          className='rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='  Capital'
          {...register('capital', {
            required: 'You must type a capital',
            minLength: { value: 3, message: {} },
          })}
        />
        {touchedFields.capital && errors?.capital?.message && (
          <p className=' pl-2 text-xs text-red-700'>
            {errors?.capital?.message}
          </p>
        )}
        {touchedFields.capital && (
          <p className=' pl-2 text-xs text-red-700'>Field touched!</p>
        )}

        <input
          type='text'
          name='phoneCode'
          id=''
          className='rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='Phone code'
          {...register('phoneCode', { minLength: 3, pattern: '/[0-9]+/i' })}
        />
        {touchedFields.phoneCode && errors?.phoneCode?.message && (
          <p className=' pl-2 text-xs text-red-700'>
            {errors?.phoneCode?.message}
          </p>
        )}
        {touchedFields.phoneCode && (
          <p className=' pl-2 text-xs text-red-700'>Field touched!</p>
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
