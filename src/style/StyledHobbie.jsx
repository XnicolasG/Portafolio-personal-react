import styled from 'styled-components'

export const Hobbie = styled.main`
margin-top: 0;
background: linear-gradient(#4ab4b4, #F6907B);
width: 100%;
height: 160vh;
padding: 2%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
`
export const Titulo = styled.h1`
    font-family:'poppins' sans-serif ;
    color: #fffdfd;
    margin: auto;
    margin-bottom: 2%;
`
export const HobbieCont = styled.div`
    width: 90%;
    margin: auto;
`
export const HobbieCard = styled.div`
    width:45% ;
    border-radius:10px ;
    background-color: #f1f1f13b;
    box-shadow: 2px 2px 25px 8px #302f2d53;
    display: flex;
    padding: 1%;
    margin: 1%;
`
export const IIHbobbieCard = styled.div`
    width:45% ;
    border-radius:10px;
    background-color: #f1f1f13b;
    box-shadow: 2px 2px 25px 8px #302f2d53;
    display: flex;
    padding: 1%;
    float: right;
    margin: 1%;
`
export const Imagex = styled.img`
border-radius: 100%;
    max-width: 25%;
    max-height: 25%;
    margin:auto;
    display: block;
    border: 2px solid #fffdfd;
    object-fit: cover;
    :hover{
        max-width: 27%;
        max-height: 27%;
        transition: all .5s ease-in;
    }
`
export const ContDes = styled.div`
    width: 60%;
    height: 40%;
    padding: .5%;
    margin:auto ;
    align-items: center;
`
export const Descripcion = styled.p`
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    color: whitesmoke;
`