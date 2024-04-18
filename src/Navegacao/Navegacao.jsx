import React, { useState } from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./style.jsx";
import Logo from "../assets/Logotipo.png"

const Navegacao = ()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
       <S.Nav> 
          <S.Image src={Logo} alt="Logo" title="LogoTC" onClick={() => setMenuOpen(!menuOpen)}/>        
          <S.Lista open={menuOpen}>
            <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/About">About</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/Projects">Projects</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/Contact">Contact</Link></li>
          </S.Lista>            
        </S.Nav>
      <Routes >
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Navegacao;