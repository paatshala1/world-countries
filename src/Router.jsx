import { createBrowserRouter } from 'react-router-dom'
import Entrance from './components/Entrance/Entrance'
import ErrorPageComponent from './components/Error/ErrorPageComponent'
import Home from './components/Home/Home'
import LogInComponent from './components/LogIn/LogInComponent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Entrance />,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: 'login',
        element: <LogInComponent />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

export default router
