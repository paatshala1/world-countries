import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Entrance from './components/Entrance/Entrance'
import LogInComponent from './components/LogIn/LogInComponent'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ByContinent from './components/ByContinent/ByContinent'
import ByLanguage from './components/ByLanguage/ByLanguage'
import Countries from './components/Countries/Countries'
import ErrorPageComponent from './components/Error/ErrorPageComponent'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Entrance />,
        errorElement: <ErrorPageComponent />,
      },
      {
        path: 'login',
        element: <LogInComponent />,
      },
      {
        path: '/*',
        element: <NavBar />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },

          {
            path: 'continent',
            element: <ByContinent />,
          },
          {
            path: 'language',
            element: <ByLanguage />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'continent/:sel/*',
            element: <Countries />,
          },
          {
            path: 'language/:sel/*',
            element: <Countries />,
          },
        ],
      },
    ],
  },
])

export default router
