import React, { Component } from 'react';
import {  ContImg, Frase, Frase, Imagex, Principal, Saludo } from '../style/styledHome';

export default class Home extends Component {
  render() {
    return (
        <Principal>
            <div>
                <Saludo>Este soy yo, Nicolás </Saludo>
                <Frase>Desarrolador Frontend en proceso con Academia Geek  </Frase>
            </div>
            <ContImg>
                <Imagex src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642824432/Personal/FotoPortafolio_tqtwmx.jpg" alt="" />
            </ContImg>
        </Principal>
    )
  }
}

