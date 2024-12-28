import React from "react"
import Port from "../assets/portflow.png"
import contador from "../assets/contador.png"
import loja from "../assets/loja de roupa.png"
import fantastika from "../assets/fantastika.png"
import * as S from "./style.jsx"



const Projects = () =>{
    
   return(
        <S.Container> 
            <S.Image  src={contador} alt="contador simples"/>
            <S.Imagem  src={loja} alt="loja"/>
            <S.ThereeImagem  src={fantastika} alt="fantastika"/>              
            <S.FourImage  src={Port} alt="Portflow"/>
        </S.Container>
    )
}
export default Projects


