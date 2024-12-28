import React from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.png"


const About = () => {
    return (
        <S.Text>
            <S.Image src={Tulani} alt="Tulani" title="Tulani" />
            <S.Paragrafo>

                Graduada em Gestão de Tecnologia da Informação pela Universidade Estácio de Sá (UNESA-RJ) e formada em Computação em Nuvem pela Escola da Nuvem.

                Apaixonada pela área de tecnologia e por boas músicas, combina entusiasmo e competência para contribuir de forma significativa em projetos e desafios.
            </S.Paragrafo>
        </S.Text>
    )
}
export default About
