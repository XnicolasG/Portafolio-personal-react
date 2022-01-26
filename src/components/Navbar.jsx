import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Barra, ILista, Lista, LogoImg, } from '../style/style';



export default class Navbar extends Component {
    render() {
        return (
            <Barra>
                <LogoImg src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642989578/Personal/logoPortafolio_gvntsz.png" alt="Logo" />
                <Lista>
                    <ILista>Hola</ILista>
                    <ILista>Proyectos</ILista>
                    <ILista>Hobbies</ILista>
                    <ILista>Contacto</ILista>
                </Lista>
            </Barra>
        )
    }
}

