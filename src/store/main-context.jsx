import { createContext, useState, useEffect } from 'react'

const MainContext = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
})

export const MainContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  const valueContext = {
    isLoggedIn,
    onLogIn: onLogInHandler,
    onLogOut: onLogOutHandler,
  }

  return (
    <MainContext.Provider value={valueContext}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContext
