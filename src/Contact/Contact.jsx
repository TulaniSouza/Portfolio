import React from "react"
import Github from"../assets/github.png"
import Whatsapp from"../assets/whatsapp.png"
import Linkedin from "../assets/linkedin.png"
import * as S from "./style.jsx"

function Contact(){
    return(
        <S.Midia>
            <S.Listagem>
                <li><a href="https://github.com/TulaniSouza" target="_blank" rel="noreferrer">
            <S.Screen src={Github} alt="Github" title="Git conheca +"/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5521972975426&text=Seja%20bem%20vindo!%20Em%20que%20posso%20ajudar%3F"
            target="_blank" rel="noreferrer" >
            <S.Photo src={Whatsapp} alt="Whatsapp" title="Contato"/>
            </a></li>
                <li><a href="https://www.linkedin.com/in/tulani-souza-07b0a6103/"
            target="_blank" rel="noreferrer" >
            <S.Social src={Linkedin} alt="Linkedin" title="Social"/>
            </a></li>
            </S.Listagem>                
        </S.Midia>
    )
}
export default Contact