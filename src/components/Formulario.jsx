import React, { useState } from 'react';
import {  Area, FormMain, FormularioCont, Inputs, TituloForm } from '../style/StyledForm';
import '../style/form.css'
export const Formulario = ()=> {

  const [info,setInfo]= useState({
    nombre:"",
    email:"",
    mensaje:""
  })

  const {nombre,email,mensaje} = info
  const contenido = `mailto:nicolasg.ngl@gmail.com?subject=Me interesa tu perfil&body=Hola mi nombre es ${nombre}. ${mensaje}`
  const handleInput = ({target})=>{
    setInfo({
      ...info,
      [target.name]: target.value
    })
  } 
  console.log(info);
  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }
  
    return (
    <FormMain id='formulario'>
        <FormularioCont onSubmit={handleSubmit}>
            <TituloForm>Contacto</TituloForm>
            <Inputs type="text" name='nombre' value={nombre} onChange={handleInput} placeholder='Ingresa tu nombre' required/>
            <Inputs type="email" name='email' value={email} onChange={handleInput} placeholder='Ingresa tu Email' required />
            <Area name="mensaje" value={mensaje} onChange={handleInput} placeholder='Dejame un mensaje' id="" cols="40" rows="5"></Area>
            <a id='enviar' href={contenido}>Enviar Mensaje</a>
        </FormularioCont>
    </FormMain>
    )
  
}
