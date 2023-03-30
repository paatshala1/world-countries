import axios from 'axios'

export default function pepito() {
  axios.interceptors.request.use(req => {
    console.log('Interceptor sending request: ', req)
  })

  axios.interceptors.response.use(
    res => {
      console.log('Receiving response', res)
      if (res.response.status >= 200 && res.response.status < 300)
        return res.data
    },
    error => {
      console.log(error)
      // return {
      //   errorMsg: error.response.data.message,
      //   status: error.response.status,
      //   type: 'ERROR',
      // }
    },
  )
}

// {
//   const { code, message, response } = error
//   return { codeError: code, msgError: message, status: response.status }
// }
