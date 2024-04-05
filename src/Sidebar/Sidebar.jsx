import React, { useState } from 'react';
import {FaTh,FaBars,FaUserAlt,FaRegChartBar,}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import * as S from "../Sidebar/style.jsx"
import Github from "../assets/github.png"
import Whatsapp from "../assets/whatsapp.jpg"

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/projects",
            name:"Projects",
            icon:<FaRegChartBar/>
        },
        
    ]
    return (
        <S.Container>
           <S.Sessao style={{width: isOpen ? "200px" : "50px"}} >
               <S.Box>
                   <S.HagaOne style={{display: isOpen ? "block" : "none"}}>Tulani</S.HagaOne>
                   <S.Block style={{marginLeft: isOpen ? "50px" : "0px"}}>
                       <FaBars onClick={toggle}/>
                   </S.Block>
                    
               </S.Box>
               
               
               <S.TwoBox>
                    {
                     menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                        ))
                    }
                     <a
              href="https://github.com/TulaniSouza"
              target="_blank"
              rel="noreferrer"
            >
                <S.Screen src={Github} alt="Github" title="Git conheca +"/>
            </a>
                    
                    <a
              href="https://api.whatsapp.com/send?phone=5521972975426&text=Seja%20bem%20vindo!%20Em%20que%20posso%20ajudar%3F"
              target="_blank"
              rel="noreferrer"
            >
                <S.Photo src={Whatsapp} alt="Whatsapp" title="Contato"/>
            </a>
                    
               </S.TwoBox>
           </S.Sessao>
           <S.Divisao>{children}</S.Divisao>
        </S.Container>
    );
};

export default Sidebar;