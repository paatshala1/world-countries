import './Tile.css'
import { NavLink } from 'react-router-dom'

export default function Tile({ element }) {
  return (
    <NavLink to={element.code}>
      <section
        className='tile p-2 hover:shadow-md hover:shadow-indigo-400'
        data-code={element.code}
      >
        <p className=' p-2 '>{element.name.toUpperCase()}</p>
        <img src={element.image} alt='' />
      </section>
    </NavLink>
  )
}
