import React from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.jpg"


const About = () => {
    return(
    <S.Text>
        <S.Image src={Tulani} alt="Tulani" title="Tulani"/>
        <S.Paragrafo> Desenvolvedora Web Frontend, que gosta de
            resolver problemas e pensar em diversas alternativas,
            constantemente em busca de novos conhecimentos e aluna 
            da turma talentos digitais no Vai na Web.
            Formanda em Gestão de Tecnologia da Informação (UNESA-RJ), 
            amante da área e, de boas músicas.
        </S.Paragrafo>
    </S.Text>
    )
}
export default About
