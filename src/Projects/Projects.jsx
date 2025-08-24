import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Port from "../assets/portflow.png";
import contador from "../assets/contador.png";
import loja from "../assets/loja de roupa.png";
import fantastika from "../assets/fantastika.png";
import cafeteria from "../assets/Cafeteria.png";
import * as S from "./style.jsx";

const projects = [
  {
    img: Port,
    link: "https://tulanisouza.github.io/-PortFlow/",
    alt: "Site com HTML e CSS",
    title: "Portflow",
    legend: "Desafio VnW 2022 - Portflow",
  },
  {
    img: contador,
    alt: "Projeto contador em JavaScript",
    title: "Contador",
    legend: "Desafio VnW 2022 - Contador",
  },
  {
    img: loja,
    link: "https://tulanisouza.github.io/Loja_de_roupa/",
    alt: "Loja de roupa com HTML e CSS",
    title: "Loja de roupa",
    legend: "Desafio VnW 2023 - Loja",
  },
  {
    img: fantastika,
    link: "https://tulanisouza.github.io/Fantasika/",
    alt: "Site sobre cachorros",
    title: "Fantastika",
    legend: "Desafio VnW 2023 - Fantastika",
  },
  {
    img: cafeteria,
    link: "https://cafeteria-orcin.vercel.app/",
    alt: "Site para cafeteria",
    title: "Cafeteria",
    legend: "Treino 2024 - Cafeteria",
  },
];

const Projects = () => {
  return (
    <S.Container>
      <Carousel
        className="carousel"
        showArrows
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showIndicators={false}
      >
        {projects.map(({ img, link, alt, title, legend }, index) => (
          <S.BoxImage key={img}>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={alt} title={title} />
              </a>
            ) : (
              <img src={img} alt={alt} title={title} />
            )}
            <S.Legend>{legend}</S.Legend>
          </S.BoxImage>
        ))}
      </Carousel>
    </S.Container>
  );
};
const rootElement = document.querySelector(".Projects");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Projects />);
} else {
  console.error("Elemento '.Projects' não encontrado no DOM");
}

export default Projects;
