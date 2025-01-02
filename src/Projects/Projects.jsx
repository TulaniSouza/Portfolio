import React from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Port from "../assets/portflow.png";
import contador from "../assets/contador.png";
import loja from "../assets/loja de roupa.png";
import fantastika from "../assets/fantastika.png";
import cafeteria from "../assets/Cafeteria.png";
import * as S from "./style.jsx";

const Projects = () => {
    return (
        <S.Container>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
            >
                <S.BoxImage>
                    <img src={Port} alt="Livro O Despertar da Senhorita Prim, capa azul florida e uma poltrona na capa" title="Livro O Despertar da Senhorita Prim" />
                    <S.Legend>Desafio do VnW em 2022- Portflow</S.Legend>
                </S.BoxImage>
                <S.BoxImage>
                    <img src={contador} alt="Livro Comida & Cozinha, capa branca com talheres sendo uma colher com tempero natural" title="Livro Comida & Cozinha" />
                    <S.Legend>Desafio do VnW em 2022- Contador</S.Legend>
                </S.BoxImage>
                <S.BoxImage>
                    <img src={loja} alt="Livro Python sem mistérios, capa azul e o símbolo da linguagem" title="Livro Python sem mistérios" />
                    <S.Legend>Desafio VnW em 2023- Loja</S.Legend>
                </S.BoxImage>
                <S.BoxImage>
                    <img src={fantastika} alt="Livro Protagonista, capa avermelhada com o nome na diagonal em letras brancas" title="Livro Protagonista" />
                    <S.Legend>Desafio VnW em 2023- Fantastika</S.Legend>
                </S.BoxImage>
                <S.BoxImage>
                    <img src={cafeteria} alt="Livro Protagonista, capa avermelhada com o nome na diagonal em letras brancas" title="Livro Protagonista" />
                    <S.Legend> Treino em 2024-Cafeteria</S.Legend>
                </S.BoxImage>
            </Carousel>
        </S.Container>
    );
};

const rootElement = document.querySelector('.Projects');
if (rootElement) {
    ReactDOM.render(<Projects />, rootElement);
} else {
    console.error("Elemento '.Projects' não encontrado no DOM");
}

export default Projects;
