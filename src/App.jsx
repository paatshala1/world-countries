import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Entrance from './components/Entrance/Entrance'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import ByContinent from './components/ByContinent/ByContinent'
import ByLanguage from './components/ByLanguage/ByLanguage'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Countries from './components/Countries/Countries'

import './App.css'

function App() {
  return (
    // We use shorthand for object (property name and value has the same name, so Lint recomends this.)
    <>
      <BrowserRouter>
        {<NavBar></NavBar>}
        <Routes>
          <Route path='/' element={<Entrance />} />
          <Route path='home' element={<Home />} />
          <Route path='continent/' element={<ByContinent />} />

          <Route path='continent/:sel/*' element={<Countries />} />

          <Route path='language' element={<ByLanguage />} />
          <Route path='language/:sel/*' element={<Countries />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
