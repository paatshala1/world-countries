import axios from 'axios'

function httpCountryRequest(country) {}

async function httpCountriesRequest(options) {
  // const validateStatus = status => {
  //   return status >= 200 && status < 300
  // }

  // const requestOptions = { ...options, validateStatus }

  try {
    const response = await axios.request(options)
    // console.log(`ANSWER: ${response.data}`)
    return response
  } catch (err) {
    console.log(err)
    return err
  }
}

function httpSearchRequest(options) {
  console.log('Request ready to be sent')
}

function httpErrorHandler(err) {
  console.log(err.toJSON)
}

export {
  httpCountryRequest,
  httpCountriesRequest,
  httpErrorHandler,
  httpSearchRequest,
}
