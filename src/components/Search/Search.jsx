import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorMessageWrapper from '../ErrMsgWrap/ErrMsgWrap'
import './Search.css'

export default function SearchBar() {
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
    <div>
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
        <Form>
          <ErrorMessage name='general'>{ErrorMessageWrapper}</ErrorMessage>

          <Field name='countryName' type='text' placeholder='Country Name' />
          <ErrorMessage name='countryName'>{ErrorMessageWrapper}</ErrorMessage>

          <Field name='capital' type='text' placeholder='Capital' />
          <ErrorMessage name='capital'>{ErrorMessageWrapper}</ErrorMessage>

          <Field name='callingCode' type='text' placeholder='Calling Code' />
          <ErrorMessage name='callingCode'>{ErrorMessageWrapper}</ErrorMessage>

          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}
