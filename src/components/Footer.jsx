import React, { Component } from 'react';
import { Alist, ContFooter, ContLista, Lista, LogoImg, LogosSr, PowerBy } from '../style/StyledFooter';
import {FaGithub} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
export default class Footer extends Component {
  render() {
    return (
    <ContFooter>
        <LogoImg src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642989578/Personal/logoPortafolio_gvntsz.png" alt="" />
        <PowerBy>Powered by <LogosSr src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643061804/Personal/SrPizzaLogo_bzx0qu.png" alt="logo2" title='SrPizza'/></PowerBy>
        <ContLista>
            <Lista><Alist target="_blank" href="https://github.com/XnicolasG?tab=repositories"><FaGithub /></Alist></Lista>
            <Lista><Alist target="_blank" href="https://www.linkedin.com/in/nicol%C3%A1s-garc%C3%ADa-l%C3%B3pez-6b2608205/"><AiFillLinkedin /></Alist></Lista>
        </ContLista>
    </ContFooter>
    )
  }
}
