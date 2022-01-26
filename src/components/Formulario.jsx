import React, { Component } from 'react';
import {  Boton, Area, FormMain, FormularioCont, Inputs, TituloForm } from '../style/StyledForm';

export default class Formulario extends Component {
  render() {
    return (
    <FormMain>
        <FormularioCont>
            <TituloForm>Contacto</TituloForm>
            <Inputs type="text" name='nombre' placeholder='Ingresa tu nombre' required/>
            <Inputs type="email" name='' placeholder='Ingresa tu Email' required />
            <Area name="" placeholder='Dejame un mensaje' id="" cols="40" rows="5"></Area>
            <Boton type='button'>Enviar Mensaje</Boton>
        </FormularioCont>
    </FormMain>
    )
  }
}
