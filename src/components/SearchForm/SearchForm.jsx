import ButtonComponent from '../UI/Button/ButtonComponent'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorMessageWrapper from '../ErrMsgWrap/ErrMsgWrap'
import './SearchForm.css'

export default function SearchForm() {
  const generalSearchHandler = values => {
    console.log(values)
  }

  const validationHandler = values => {
    const errors = {}
    if (
      values.title.length <= 3 &&
      values.actor.length <= 3 &&
      values.genre.length <= 3
    ) {
      errors.general = 'Please type a valid text to search for (4 charanters)'
    }

    return errors
  }

  return (
    <div className=' my-0 mx-auto mt-12 max-w-md'>
      <Formik
        initialValues={{
          countryName: '',
          capital: '',
          callingCode: '',
          general: '',
        }}
        onSubmit={generalSearchHandler}
        validate={validationHandler}
      >
        <Form className='container my-0 mx-auto flex flex-col gap-4'>
          <ErrorMessage name='general'>{ErrorMessageWrapper}</ErrorMessage>

          <Field
            name='countryName'
            type='text'
            placeholder='Country Name'
            className='rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-blue-200'
          />
          <ErrorMessage name='countryName'>{ErrorMessageWrapper}</ErrorMessage>

          <Field
            name='capital'
            type='text'
            placeholder='Capital'
            className='rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-blue-200'
          />
          <ErrorMessage name='capital'>{ErrorMessageWrapper}</ErrorMessage>

          <Field
            name='callingCode'
            type='text'
            placeholder='Calling Code'
            className='rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-blue-200'
          />
          <ErrorMessage name='callingCode'>{ErrorMessageWrapper}</ErrorMessage>

          <ButtonComponent label='Search' type='submit' />
        </Form>
      </Formik>
    </div>
  )
}
