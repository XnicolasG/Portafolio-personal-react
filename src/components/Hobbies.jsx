import React, { Component } from 'react';
import { ContDes, Descripcion, Hobbie, HobbieCard, HobbieCont, IIHbobbieCard, Imagex, Titulo } from '../style/StyledHobbie';

export default class Hobbies extends Component {
    render() {
        return (
            <Hobbie>
                <Titulo>¿Que me apasiona?</Titulo>
                <HobbieCont>
                    <HobbieCard>
                        <Imagex src="https://res.cloudinary.com/dlkynkfvq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1642969395/Personal/coding_plwpwn.jpg" alt="img" />
                        <ContDes>
                            <Descripcion>La tecnología en todos sus aspectos, desde la parte de entretenimiento como Gaming hasta todo el mundo del  desarrollo web e IA  </Descripcion>
                        </ContDes>
                    </HobbieCard>
                    <IIHbobbieCard>
                        <ContDes>
                            <Descripcion>El mundo de la gastronomía y todo lo que esta tiene que ofrecer</Descripcion>
                        </ContDes>
                        <Imagex src="https://res.cloudinary.com/dlkynkfvq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1642967185/Personal/wine_food_geupsu.jpg" alt="img" />
                    </IIHbobbieCard>
                    </HobbieCont>
                    <HobbieCont>
                    <HobbieCard>
                        <Imagex src="https://res.cloudinary.com/dlkynkfvq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1642967163/Personal/running_kvlpqx.jpg" alt="img" />
                        <ContDes>
                            <Descripcion>El Deporte siempre ha estado en mi vida y lo considero una pasión adquirida como también algo fundamental en mi crecimiento personal y profesional,
                                 pues es un gran pilar de motivación, persistencia y fuerza mental necesaria para cualquier aspecto de mi día a día</Descripcion>
                        </ContDes>
                    </HobbieCard>
                    <IIHbobbieCard>
                        <ContDes>
                        <Descripcion>Las peliculas y series como descanso de las rutinas diarias ademas de tambien ser una gran insipiración y una fuente de ideas para proyectos personales</Descripcion>
                        </ContDes>
                        <Imagex src="https://res.cloudinary.com/dlkynkfvq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1642973771/Personal/movies_bfnpe4.jpg" alt="img" />
                    </IIHbobbieCard>
                </HobbieCont>
            </Hobbie>
        )
    }
}
