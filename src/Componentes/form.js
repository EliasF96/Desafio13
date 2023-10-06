import React, { useState } from 'react'
import { Message } from './message'

export const Formulario = ({validate}) => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const stop = (e)=>{
    e.preventDefault()
    validate(name, age)
  }

  return (
    <form onSubmit={stop}>
      <h1>Bienvenido, ingrese sus datos</h1>
      <input type="text" placeholder='Ingrese su Nombre' onChange={e=>setName(e.target.value)}></input>
      <input type="number" placeholder='Ingrese su Edad' onChange={e=>setAge(e.target.value)}></input>
      <button>Send Data</button>
    </form> 
  );

}