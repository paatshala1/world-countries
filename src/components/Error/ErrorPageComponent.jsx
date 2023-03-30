import { NavLink, useRouteError } from 'react-router-dom'
import ButtonComponent from '../UI/Button/ButtonComponent'
import './ErrorPageComponent.css'

export default function ErrorPageComponent() {
  const routerError = useRouteError()

  return (
    <>
      <div id='error-page'>
        <header>
          <h1 className=' mt-5'>Oops!</h1>
          <p>{routerError.statusText || routerError.message}</p>
        </header>
        <img
          className=' m-8 mx-auto w-8/12'
          src='/images/CodePen-404-Page(2).gif'
          alt=''
        />
      </div>
      <NavLink to='/app/home'>
        <div className='mx-auto my-0 grid w-1/3 grid-cols-1 justify-around gap-8 px-20 py-8'>
          <ButtonComponent label='Go home' goTo='/app/home' />
        </div>
      </NavLink>
    </>
  )
}
