import { useCallback, useMemo, useState } from 'react'

export default function useToggle(txtActive, txtInactive) {
  const [isActive, setIsActive] = useState(false)

  const [labels, setLabels] = useState({
    currentLabel: txtInactive,
    txtInactive,
    txtActive,
  })

  const turnOnOff = useCallback(function toggle() {
    setIsActive(currentState => {
      return !currentState
    })
    setLabels(prevState => {
      if (!isActive) {
        return { ...prevState, currentLabel: prevState.txtActive }
      } else {
        return { ...prevState, currentLabel: prevState.txtInactive }
      }
    })
  })

  return useMemo(() => {
    // let finalState = { isActive, turnOnOff, labels }
    // finalState = JSON.stringify(finalState)
    // localStorage.setItem('toggleStatus', finalState)
    return { isActive, turnOnOff, labels }
  }, [isActive, turnOnOff])
}
