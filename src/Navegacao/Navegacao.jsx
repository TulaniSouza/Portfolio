import React from "react"
import Home from "../Home/Home.jsx"
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import * as S from "./style.jsx"
import Logo from"../assets/Logotipo.png"
import Github from "../assets/github.png"
import Whatsapp from "../assets/whatsapp.jpg"

function Navegacao(){

    ItemMenu.forEach((item) => (item.classList.remove('ativo')))
    this.classList.add('ativo')

    menuItem.forEach((item) => (item.addEventListener('click', selectLink)))

    //Expandir o menu

    let btnExp = document.querySelector('#btn-exp')
    let menuSide = document.querySelector('S.Nav')

    btnExp.addEventListener('click'), function(){
    menuSide.classList.toggle('expandir')}

    return(
       <BrowserRouter>
        
            <S.Nav> 
                <S.Image src={Logo} alt="Logo" title="LogoTC"/>        
                <S.Lista>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                </S.Lista>
            
                <S.Screen src={Github} alt="Github" title="Git conheca +"/>
            
                <S.Photo src={Whatsapp} alt="Whatsapp" title="Contato"/>
                <S.Divisao>
                    <i class="bi bi-list" id="btn-exp"></i>
                </S.Divisao>

                <S.Listagem>
                    <S.ItemMenu>
                        <a href="#">
                            <span class="icon"><i class="bi bi-house-door"></i></span>
                            <span class="txt-link">Home</span>
                        </a>
                    </S.ItemMenu>
                    <S.ItemMenu1>
                        <a href="#">
                            <span class="icon"><i class="bi bi-columns-gap"></i></span>
                            <span class="txt-link">About</span>
                        </a>
                    </S.ItemMenu1>
                    <S.ItemMenuDois>
                        <a href="#">
                            <span class="icon"><i class="bi bi-person-circle"></i></span>
                            <span class="txt-link">Projects</span>
                        </a>
                    </S.ItemMenuDois>
                </S.Listagem>
       
            </S.Nav>

            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route pathh="About" element={ <About />}/>
                <Route path="Projects" element= { <Projects /> }/>
            </Routes>

        </BrowserRouter>
)   }

export default Navegacao