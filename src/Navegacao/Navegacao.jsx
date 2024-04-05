import React from "react"
import Home from "../Home/Home.jsx"
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar.jsx"


    const Navegacao = () =>{
        return(
       <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route pathh="About" element={ <About />}/>
                    <Route path="Projects" element= { <Projects /> }/>
                </Routes>
            </Sidebar>
        </BrowserRouter>
)   }

export default Navegacao