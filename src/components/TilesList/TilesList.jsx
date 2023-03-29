// import useArray from '../../hooks/useArray'

import Tile from '../Tile/Tile'
import './TilesList.css'
import useToggle from '../../hooks/useToggle'

export default function TilesList({ elements, section, sample }) {
  const { isActive, labels, turnOnOff } = useToggle('View less', 'View all')

  const elementsToRender = isActive
    ? [...elements]
    : elements.filter((e, i) => i < sample)

  const tilesToShow = (
    <div className='tiles-container '>
      <p className='tiles-title text-indigo-700'>{'By ' + section}</p>
      <div className='tiles-expand text-indigo-700' onClick={turnOnOff}>
        {labels.currentLabel}
      </div>
      {elementsToRender.map(e => {
        return <Tile key={e.id} element={e} section={section} />
      })}
    </div>
  )

  return <div>{tilesToShow}</div>
}
