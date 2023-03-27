import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Entrance from './components/Entrance/Entrance'
import ErrorPageComponent from './components/Error/ErrorPageComponent'
import Home from './components/Home/Home'
import LogInComponent from './components/LogIn/LogInComponent'

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
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

export default router
