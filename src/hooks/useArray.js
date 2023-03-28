import { useState } from 'react'

export default function useArray(defaultValue = []) {
  const [array, setArray] = useState(defaultValue)

  function filter(callback) {
    setArray(origArray => origArray.filter(callback))
  }

  function update(index, newElement) {
    setArray(origArray => [
      ...origArray.slice(0, index),
      newElement,
      ...origArray.slice(index + 1, origArray.length - 1),
    ])
  }

  function clear() {
    setArray([])
  }

  return { array, set: filter, update, clear }
}
