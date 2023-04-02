import { NavLink, useRouteError } from 'react-router-dom'
import ButtonComponent from '../UI/Button/ButtonComponent'
import { useContext } from 'react'
import MainContext from '../../store/main-context'
import './ErrorPageComponent.css'

export default function ErrorPageComponent() {
  const routerError = useRouteError()
  const ctx = useContext(MainContext)
  const err = ctx.currentError

  return (
    <>
      {err === null && (
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
      )}

      {err !== null && (
        <div className='w-screen p-20 text-slate-300'>
          <h1>Http Request Error</h1>
          <section className=' m-10 grid grid-cols-6 gap-4 text-2xl'>
            <img
              src='./images/preHistoric.png'
              alt=''
              className=' col-start-1 col-end-4 row-start-1 row-end-5'
            />
            <p className=' col-start-4 col-end-7 row-start-1 my-6'>
              Details: {err.code}
            </p>
            <p className=' col-start-4 col-end-7 row-start-2'>
              Error: {err.message}
            </p>
            <p className=' col-start-4 col-end-7 row-start-3 text-base'>
              {`${err.response.data.message} when attempting ${err.response.request.responseURL}`}
            </p>
            <NavLink
              to='/app/home'
              className=' col-start-5 justify-self-center '
            >
              <ButtonComponent label='Go Home' />
            </NavLink>
          </section>
        </div>
      )}
    </>
  )
}
