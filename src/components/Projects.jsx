import React, { Component } from 'react';
import { Boton, ContPagSec, DivCont, PagSec, Peli, PrincipalDiv, SecundarioDiv } from '../style/StyledProjects';
import { Consola, FraseH3, FraseP, Proyectos } from '../style/StyledProjects';

export default class Projects extends Component {
  render() {
    return (
      <Proyectos>
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
          <Boton>Ver Proyecto</Boton>
        </PrincipalDiv>
        <SecundarioDiv>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642874552/Personal/CapturaLanding_uuuv7k.png" alt="" />
            <Boton>Ver Proyecto</Boton>
          </ContPagSec>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642879589/Personal/CapturaRick_Morty_oxoqut.png" alt="" />
            <Boton>Ver Proyecto</Boton>
          </ContPagSec>
          <ContPagSec>
            <PagSec src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642874498/Personal/capturaDocumentacion_tgvu2m.png" alt="" />
            <Boton>Ver Proyecto</Boton>
          </ContPagSec>
        </SecundarioDiv>
      </Proyectos>
    )
  }
}
