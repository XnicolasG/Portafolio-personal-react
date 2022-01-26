import React, { useState } from 'react';
import {  Boton, Area, FormMain, FormularioCont, Inputs, TituloForm } from '../style/StyledForm';

export const Formulario = ()=> {

  const [info,setInfo]= useState({
    nombre:"",
    email:"",
    mensaje:""
  })

  const {nombre,email,mensaje} = info
  const handleInput = ({target})=>{
    setInfo({
      ...info,
      [target.name]: target.value
    })
  } 
  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = new FormData()
    console.log(form.get('mensaje'));
  }
  
    return (
    <FormMain>
        <FormularioCont onSubmit={handleSubmit}>
            <TituloForm>Contacto</TituloForm>
            <Inputs type="text" name='nombre' value={nombre} onChange={handleInput} placeholder='Ingresa tu nombre' required/>
            <Inputs type="email" name='email' value={email} onChange={handleInput} placeholder='Ingresa tu Email' required />
            <Area name="mensaje" value={mensaje} onChange={handleInput} placeholder='Dejame un mensaje' id="" cols="40" rows="5"></Area>
            <Boton type='submit'>Enviar Mensaje</Boton>
        </FormularioCont>
    </FormMain>
    )
  
}
