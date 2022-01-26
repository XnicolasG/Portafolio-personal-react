import styled from "styled-components";

export const Proyectos = styled.main`
margin-top: 0;
background: linear-gradient(#111010, #4ab4b4);
width: 100%;
height: 180vh;
padding: 2%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
`
export const DivCont = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    
`
export const Consola = styled.div`
    width: 40%;
    padding: 4%;
    position: relative;
    margin: 1%;

`
export const FraseH3 = styled.h3`
color: whitesmoke;
font-family: monospace;
letter-spacing: 1%;
line-height: 40px;
`
export const FraseP = styled.p`
color: #a8a7a7;
font-size: 1.2rem;
`
export const PrincipalDiv = styled.div`
text-align: center;
width: 60%;
padding: 1% .5% 1% .5%;
border-radius: 10px;
display: block;
position: relative;
margin: auto;
justify-content: center;
:hover{
box-shadow: 2px 2px 65px 8px #302f2d;
width: 62%;
transition: all .7s ease-in-out;
}
`
export const SecundarioDiv = styled.div`
    width: 90%;
    margin: auto;
    display: inline-block;
`
export const Peli = styled.img`
max-width: 90%;
border-radius: 6px;
text-align: center;
margin: auto;
display: block;
`
export const ContPagSec = styled.div`
text-align: center;
width: 30%;
padding: 1% .5% 1% .5%;
border-radius: 10px;
display: inline-block;
position: relative;
margin: auto;
justify-content: center;
:hover{
box-shadow: 2px 2px 65px 8px #302f2d;
width: 32%;
transition: all .7s ease-in-out;
}
`
export const PagSec = styled.img`
max-width: 100%;
height: 25vh;
border-radius: 6px;
text-align: center;
margin: auto;
display: block;
`
export const Boton = styled.button`
margin-top: .5%;
border: 2px solid white;
border-radius: 4px;
background-color: transparent;
color: white;
font-family: 'poppins' sans-serif;
font-weight: bolder;
width: 60%;
padding: 1%;
:hover{
    box-shadow: 2px 2px 65px 2px #302f2d;
    border:2px solid transparent;
    transition: all .5s ease;
}
`
