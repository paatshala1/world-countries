import axios from 'axios'
import ErrorPageComponent from './src/components/Error/ErrorPageComponent'

function httpCountryRequest(country) {}

async function httpCountriesRequest(options) {
  try {
    const { data } = await axios.request(options)
    return data
  } catch (err) {
    httpErrorHandler(err)
  }

  // console.log(res.data)
  // .then(res => console.log(res.data))
  // .catch(httpErrorHandler)
}

function httpErrorHandler(err) {
  return <ErrorPageComponent err={err} />
}

export { httpCountryRequest, httpCountriesRequest, httpErrorHandler }
