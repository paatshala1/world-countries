import { useState } from 'react'
import Tile from '../Tile/Tile'
import './TilesList.css'

export default function TilesList({ elements, section, sample }) {
  function expandHandler() {
    setViewAll(prevState => {
      if (prevState[0]) {
        return [!prevState[0], 'View all']
      } else {
        return [!prevState[0], 'View less']
      }
    })
  }

  const [viewAll, setViewAll] = useState([false, 'View all'])

  const elementsToRender = viewAll[0]
    ? [...elements]
    : elements.filter((e, i) => i < sample)

  const tilesToShow = (
    <div className='tiles-container '>
      <p className='tiles-title text-indigo-700'>{'By ' + section}</p>
      <div className='tiles-expand text-indigo-700' onClick={expandHandler}>
        {viewAll[1]}
      </div>
      {elementsToRender.map(e => {
        return <Tile key={e.id} element={e} section={section} />
      })}
    </div>
  )

  return <div>{tilesToShow}</div>
}
