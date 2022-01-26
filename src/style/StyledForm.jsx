import styled from 'styled-components'

export const FormMain = styled.main`
margin-top: 0;
background: linear-gradient(#F6907B, #3e7bca);
width: 100%;
height: 68vh;
padding: 2%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
`
export const FormularioCont = styled.form`
    
    margin: auto;
    margin-top: 5%;
    padding: 2%;
    border-radius: 8px;
    display: flex ;
    flex-direction: column;
    
    background-color: #16151573;
`
export const TituloForm = styled.h3`
 display: inline-block;
 color: #ee4729;
 text-align: center;
 justify-content: center;
 -webkit-text-stroke:1px black;
    
`
export const Inputs = styled.input`
    display: block;
    width: 80%;
    margin: auto;
    margin-bottom: 2%;
    color: whitesmoke;
    background: #f1f1f1b3;
    border: 2px solid white;
    border-radius: 5px;
    text-align: center;
    padding: 1%;
    :focus{
        background: #e7cb6d7d;
        transition:all .3s ease ;
    }
`
export const Area = styled.textarea`
    width: 80%;
    margin: auto;
    margin-bottom: 2%;
    color: whitesmoke;
    background: #f1f1f1b3;
    border: 2px solid white;
    border-radius: 5px;
    padding: 1%;
    :focus{
        background: #e7cb6d7d;  
    }

`
export const Boton = styled.button`
    width: 70%;
    margin: auto;
    background: transparent;
    color: white;
    border-radius: 5px;
    border: 2px white solid;
    margin-bottom: 3%;
    :focus{
        border:2px solid coral;
        color: coral;
    }
`