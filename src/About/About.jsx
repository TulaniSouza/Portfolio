import React from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.jpg"


const About = () => {
    return(
    <S.Text>
        <S.Image src={Tulani} alt="Tulani" title="Tulani"/>
        <S.Paragrafo> Desenvolvedora Web Front-end, apta a 
            resolver problemas e pensar em alternativas para
            a questão; proativa, dedicada e aluna da turma 
            Talentos Digitais - Vai na Web- (HTML, CSS, JS, React, Hooks e Cloud AWS).
            Formanda em Gestão de Tecnologia da Informação (UNESA-RJ), 
            amante da área e, de boas músicas.
        </S.Paragrafo>
    </S.Text>
    )
}
export default About
