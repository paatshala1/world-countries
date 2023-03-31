import LogoComponent from '../UI/LogoComponent/LogoComponent'
import ButtonComponent from '../UI/Button/ButtonComponent'
import { useForm } from 'react-hook-form'

export default function SearcherComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: '',
      capital: '',
      phoneCode: '',
    },
  })

  // console.log(errors)
  console.log(watch('country'))

  function handleSubmitHandler(data) {
    console.log(data)
  }

  return (
    <div className='grid w-2/5 grid-cols-2 shadow-md shadow-stone-200'>
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
        onSubmit={handleSubmit(handleSubmitHandler)}
        className=' grid gap-2 bg-zinc-50 p-4'
      >
        <p className=' text-indigo-600'>
          Type at least 3 characters in any field to help you.
        </p>
        <input
          type='text'
          name='country'
          id=''
          className=' rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='  Country'
          {...register('country', {
            required: 'You must type a Country',
            minLength: { value: 3, message: 'Min lenth is three characters' },
          })}
        />
        <p className=' text-orange-600'>{errors.country?.message}</p>
        <input
          type='text'
          name='capital'
          id=''
          className='rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='  Capital'
          {...register('capital', {
            required: 'You must type a capital',
            minLength: { value: 3, message: 'Min leth for Capital is 3' },
          })}
        />
        <input
          type='text'
          name='phoneCode'
          id=''
          className='rounded-md bg-indigo-200 pl-2 text-indigo-600'
          placeholder='Phone code'
          {...register('phoneCode', { minLength: 3 })}
        />
        <div className='mt-2 grid grid-cols-3 content-center'>
          <div className=' col-start-1 col-end-4'>
            <ButtonComponent label='Search' />
          </div>
        </div>
      </form>
    </div>
  )
}
