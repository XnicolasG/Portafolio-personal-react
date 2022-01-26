import styled from "styled-components";
import React from "react";


export const Barra = styled.nav`
display:flex;
flex-direction: row;
background-color:#0D0D0D ;
height: 10vh;
width: 100%;
position: fixed;
z-index: 100;
`
export const LogoImg = styled.img`
    margin-left: 2%;
`
export const Lista = styled.ul`
display: flex;
flex-direction: row;
text-align: center;
margin-left: 15%;
`
export const ILista = styled.li`
list-style: none;
text-decoration: none;
margin: 5%;
color: white;
cursor: pointer;
font-family: 'Poppins', sans-serif;
:hover{
    color: #F1C40F;
    font-size: 1.1em;
    transition: all .8s ease; 
}
`
