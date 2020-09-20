import React from 'react'
import { useOnOff } from '../../context/OnOff'

function OnOff() {
  const { OnOff, setOnOff } = useOnOff()

  return (
    <div>
      <button onClick={() => setOnOff(!OnOff)}>Liga/Desliga</button>
      {OnOff ? <strong>Ligado!</strong> : <strong>Desligado!</strong>}
    </div>
  )
}

export default OnOff