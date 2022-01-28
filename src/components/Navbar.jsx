import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Barra, ILista, Lista, LogoImg, } from '../style/style';
import '../style/nav.css'



export default class Navbar extends Component {
    render() {
        return (
            <Barra>
                <LogoImg src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642989578/Personal/logoPortafolio_gvntsz.png" alt="Logo" />
                <Lista>
                <ILista><a href="#inicio">Inicio</a></ILista>
                    <ILista><a href="#projects">Proyectos</a></ILista>
                    <ILista><a href="#hobbies">Hobbies</a></ILista>
                    <ILista><a href="#formulario">Contacto</a></ILista>
                </Lista>
            </Barra>
        )
    }
}

