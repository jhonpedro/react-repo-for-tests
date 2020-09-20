import React from 'react'
import { useOnOff } from '../../context/OnOff'
import OnOffComponent from './OnOff'

function ContextSample() {
  const { OnOff } = useOnOff()



  return (
    <div>
      Ligado ou desligado?
      <br />
      <OnOffComponent />
      <hr />

      Tá ligado ou desligado?? <br />
      Eu te respondo! <br />
      {OnOff ? <strong>Ligado!</strong> : <strong>Desligado!</strong>}
    </div>
  )
}

export default ContextSample