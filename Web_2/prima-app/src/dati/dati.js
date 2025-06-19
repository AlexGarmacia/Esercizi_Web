import React from 'react'

const Persona = ({nome,cognome,età}) => {
  return (
    <>
    <div>nome:{nome}</div>
    <div>cognome:{cognome}</div>
    <div>età:{età}</div>
    </>
  )
}

export default Persona