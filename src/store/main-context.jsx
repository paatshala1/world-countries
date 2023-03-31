import { createContext, useState, useEffect } from 'react'

const MainContext = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
  currentError: {},
  onSetHttpError: () => {},
  onClearHttpError: () => {},
})

export const MainContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentError, setCurrentError] = useState(null)

  useEffect(() => {
    setIsLoggedIn(false)
  }, [])

  function onLogOutHandler() {
    setIsLoggedIn(false)
    localStorage.removeItem('stored-country')
    localStorage.removeItem('is-logged')
  }

  function onLogInHandler() {
    setIsLoggedIn(true)
    localStorage.setItem('is-logged', 'true')
  }

  function onSetHttpErrorHandler(error) {
    setCurrentError(error)
  }

  function onClearHttpErrorHandler() {
    setCurrentError(null)
  }

  const valueContext = {
    isLoggedIn,
    onLogIn: onLogInHandler,
    onLogOut: onLogOutHandler,
    currentError,
    onSetHttpError: onSetHttpErrorHandler,
    onClearHttpError: onClearHttpErrorHandler,
  }

  return (
    <MainContext.Provider value={valueContext}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContext
