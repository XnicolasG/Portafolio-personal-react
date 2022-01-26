import styled from "styled-components";

export const Principal = styled.main`
margin-top: 0;
background: linear-gradient(#ce5353, #110f0f);
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Saludo = styled.h2`
    color: white;
    font-family: 'poppins' sans-serif;
    font-size: 3.2rem;
`
export const Frase = styled.p`
    color:#d3b980 ;
    font-size: 1.2em;
    text-align: center;
`

export const ContImg = styled.div`
width: 40%;
margin-left: 1%;
`
export const Imagex = styled.img`
border-radius: 100%;
    max-width: 48%;
    max-height: 48%;
    margin:auto;
    display: block;
    box-shadow: 2px 2px 65px 8px #c59632;
    object-fit: cover;
    :hover{
        max-width: 50%;
        max-height: 50%;
        transition: all .5s ease-in;
    }
`
