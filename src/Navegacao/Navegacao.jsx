import React from "react"
import Home from "../Home/Home.jsx"
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import * as S from "./style.jsx"
import Logo from"../assets/Logotipo.png"
import Github from "../assets/github.png"
import Whatsapp from "../assets/whatsapp.jpg"
import Sidebar from '../Sidebar'

function Navegacao(){
    const Navegacao = () => {
        const [sidebar, setSidebar] = useState(false)
      
        const showSiderbar = () => setSidebar(!sidebar)
      
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
                
                <S.Container>
                    <FaBars onClick={showSiderbar} />
                    {sidebar && <Sidebar active={setSidebar} />}
                </S.Container>
            </S.Nav>

            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route pathh="About" element={ <About />}/>
                <Route path="Projects" element= { <Projects /> }/>
            </Routes>

        </BrowserRouter>
)   }}

export default Navegacao