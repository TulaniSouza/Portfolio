import React from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./style.jsx";
import Logo from "../assets/Logotipo.png"

const Navegacao = ()=> {
  return (
    <BrowserRouter>
       <S.Nav> 
            <S.Image src={Logo} alt="Logo" title="LogoTC"/>        
            <S.Lista>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </S.Lista>            
        </S.Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Navegacao;