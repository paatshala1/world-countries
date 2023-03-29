import { useRouteError } from 'react-router-dom'

export default function ErrorPageComponent({ err }) {
  const error = useRouteError()

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. See below some detail</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>{err.message}</p>
    </div>
  )
}
