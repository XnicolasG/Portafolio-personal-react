import React, { Component } from 'react';
import { Boton, ContPagSec, DivCont, PagSec, Peli, PrincipalDiv, SecundarioDiv } from '../style/StyledProjects';
import { Consola, FraseH3, FraseP, Proyectos } from '../style/StyledProjects';

export default class Projects extends Component {
  render() {
    return (
      <Proyectos id='projects'>
        <DivCont>
          <Consola>
            <FraseH3>Todo empezo con un console.log('Hello World')...</FraseH3>
          </Consola>
          <Consola>
            <FraseP>Estos han sido algunos de mis primeros pasos en el mundo del Frontend</FraseP>
          </Consola>
        </DivCont>
        <PrincipalDiv>
          <Peli src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642874465/Personal/capturaPeliculas_djehxl.png" alt="" />
          <a target='_blank' rel="noreferrer" href="https://github.com/academia-geek/aprendices-geek-entrenamiento-XnicolasG/tree/master/Modulo-3/Tarea-02"><Boton>Ver Proyecto</Boton></a>
        </PrincipalDiv>
        <SecundarioDiv>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642874552/Personal/CapturaLanding_uuuv7k.png" alt="" />
            <a target='_blank' rel="noreferrer" href="https://xnicolasg.github.io/landing_page/"><Boton>Ver Proyecto</Boton></a>
          </ContPagSec>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642879589/Personal/CapturaRick_Morty_oxoqut.png" alt="" />
            <a target="_blank" rel="noreferrer" href="https://xnicolasg.github.io/Rick-y-Morty-API/"><Boton>Ver Proyecto</Boton></a>
          </ContPagSec>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642874498/Personal/capturaDocumentacion_tgvu2m.png" alt="" />
            <a target="_blank" rel="noreferrer" href="https://xnicolasg.github.io/Documentaci-n_tecnica/"><Boton>Ver Proyecto</Boton></a>
          </ContPagSec>
        </SecundarioDiv>
      </Proyectos>
    )
  }
}
