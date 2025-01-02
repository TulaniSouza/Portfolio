import React from "react"
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.png"
import Aplicacao from "../assets/Aplicacao-de-Melhoria-Continua.png"
import Desenvolv from "../assets/Dev-Front-end-vinteEDois.png"
import Dev from "../assets/Dev-front-end-vinteEQuatro.png"
import EDN from "../assets/EDN.png"
import Gestao from "../assets/Gestao-de-Projetos-e-de-Informacao.png"
import Programacao from "../assets/Programacao-para-Internet.png"
import Implantacao from "../assets/Implantacao.png"

const About = () => {
    return (
        <S.Box>
            <S.Imag>
                <S.Image src={Tulani} alt="Tulani" title="Tulani" />
            </S.Imag>
            <S.Text>
                <S.Paragrafo>
                    Graduada em Gestão de Tecnologia da Informação pela Universidade Estácio de Sá (UNESA-RJ) em junho de 2024, com especialização em Computação em Nuvem pela Escola da Nuvem (outubro de 2024). Completei formações em Desenvolvimento Front-end (outubro de 2022 e junho de 2024) e Desenvolvimento Full Stack (março de 2025) pelo programa Vai na Web, onde adquiri ampla experiência em tecnologias como HTML, CSS, JavaScript, React e APIs RESTful.

                    Apaixonada por tecnologia e inovação, integro entusiasmo e competência para criar interfaces web interativas, computação em Nuvem e contribuir significativamente em projetos desafiadores.


                </S.Paragrafo>

            </S.Text>
            <S.Container>
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    showThumbs={false}
                    showIndicators={false}
                >
                    <S.BoxImage>
                        <img src={Aplicacao} alt="Certificado de Implantação de Governaça" />
                        <S.Legend>UNESA</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={Desenvolv} alt="Certificado de Desenvolvedora Front-end" />
                        <S.Legend>Vai na Web</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={Dev} alt="Certificado de Desenvolvedora Front-end" title="Desenvolvedora" />
                        <S.Legend>Vai na Web</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={EDN} alt="Certificado da Escola da Nuvem" title="EDN" />
                        <S.Legend>Escola da Nuvem</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={Gestao} alt=" Certificado de Gestão de Projetos e de Informação" title="UNESA" />
                        <S.Legend> UNESA</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={Programacao} alt=" Certificado de Programação para internet" title="UNESA" />
                        <S.Legend> UNESA</S.Legend>
                    </S.BoxImage>
                    <S.BoxImage>
                        <img src={Implantacao} alt=" Certificado de Implantação de Governaça" title="UNESA" />
                        <S.Legend> UNESA</S.Legend>
                    </S.BoxImage>
                </Carousel>
            </S.Container>
        </S.Box>

    )
}
const rootElement = document.querySelector('.About');
if (rootElement) {
    ReactDOM.render(<About />, rootElement);
} else {
    console.error("Elemento '.About' não encontrado no DOM");
}

export default About
