import React, { Component } from 'react';
import { Alist, ContFooter, ContLista, ItemsR, Lista, LogoImg, LogosSr, PowerBy } from '../style/StyledFooter';

export default class Footer extends Component {
  render() {
    return (
    <ContFooter>
        <LogoImg src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642989578/Personal/logoPortafolio_gvntsz.png" alt="" />
        <PowerBy>Powered by <LogosSr src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643061804/Personal/SrPizzaLogo_bzx0qu.png" alt="logo2" title='SrPizza'/></PowerBy>
        <ContLista>
            <Lista><Alist href=""><ItemsR src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643075236/Personal/Iconogithub_ncs7ci.png" alt=" " /></Alist></Lista>
            <Lista><Alist href=""><ItemsR src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643075222/Personal/Logolinkedin_pv0ojf.png" alt=" " /></Alist></Lista>
        </ContLista>
    </ContFooter>
    )
  }
}
