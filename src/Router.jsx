import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Entrance from './components/Entrance/Entrance'
import ErrorPageComponent from './components/Error/ErrorPageComponent'
import Home from './components/Home/Home'
import LogInComponent from './components/LogIn/LogInComponent'
import NavBar from './components/NavBar/NavBar'
import ByContinent from './components/ByContinent/ByContinent'
import ByLanguage from './components/ByLanguage/ByLanguage'

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
            element: <ByLanguage />,
          },
        ],
      },
    ],
  },
])

export default router
