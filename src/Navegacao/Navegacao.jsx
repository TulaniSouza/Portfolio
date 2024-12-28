import React, { useState } from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./style.jsx";
import Logo from "../assets/Logotipo.png"
import Bug from "../Erro/Bug.jsx";


const Navegacao = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <BrowserRouter>
      <S.Nav>
        <S.Image
          src={Logo}
          alt="Logo"
          title="LogoTC"
          onClick={toggleMenu}
          aria-label="Abrir/Fechar menu"
        />
        <S.Lista open={menuOpen}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </S.Lista>
      </S.Nav>
      <Routes >
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Bug/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default Navegacao;