import './Tile.css'
import { NavLink } from 'react-router-dom'

export default function Tile(props) {
  return (
    <NavLink to={props.element.code}>
      <section className='tile' data-code={props.element.code}>
        <p>{props.element.name.toUpperCase()}</p>
      </section>
    </NavLink>
  )
}
