import React from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./style.jsx";
import Github from "../assets/github.png";
import Whatsapp from "../assets/whatsapp.jpg";
import Sidebar from "../Sidebar/Sidebar.jsx";

const Navegacao = ()=> {
  return (
    <BrowserRouter>
      <Sidebar>
        <S.ListaSideBar>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </S.ListaSideBar>
        <S.Screen src={Github} alt="Github" title="Git conheca +" />

        <S.Photo src={Whatsapp} alt="Whatsapp" title="Contato" />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default Navegacao;