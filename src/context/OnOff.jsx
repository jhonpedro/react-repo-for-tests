import React, { createContext, useState, useContext } from 'react'

const OnOffContext = createContext()

export default function OnOffProvider({ children }) {
  const [OnOff, setOnOff] = useState(false)

  return (
    <OnOffContext.Provider value={{
      OnOff,
      setOnOff
    }}>
      {children}
    </OnOffContext.Provider>
  )
}

export function useOnOff() {
  const context = useContext(OnOffContext)
  const { OnOff, setOnOff } = context

  return { OnOff, setOnOff }
}
