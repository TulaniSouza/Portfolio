import React,{useState}  from "react"
import * as S from "./style.jsx"
import Logo from "../assets/Logotipo.png"
import { Link} from 'react-router-dom';



const Sidebar= ()=> {
    const [sidebarState, setSidebarState] = useState('closed');
const openReducedSidebar = () => {
setSidebarState('reduced');
};
const expandSidebar = () => {
setSidebarState('expanded');
   };
const closeSidebar = () => {
setSidebarState('closed');
   };
     return(
    <S.Container >
        <div>
        {sidebarState === 'closed' && (
           <button onClick={openReducedSidebar}>Abrir Sidebar
           </button>      
        )}      
        {(sidebarState === 'reduced' || sidebarState === 'expanded') && (
            <div className={`sidebar ${sidebarState}`}>
                <button onClick={expandSidebar}>
                    {sidebarState === 'reduced' ? 'Expandir' : 'Fechar'} Sidebar
                </button>
                {sidebarState === 'expanded' && (
                <ul>
                    <li><Link to="/" onClick={closeSidebar}><ion-icon name="home-outline"></ion-icon> Home</Link></li>
                    <li><Link to="/about" onClick={closeSidebar}><ion-icon name="person-outline"></ion-icon> About</Link></li>
                    <li><Link to="/projects" onClick={closeSidebar}><ion-icon name="git-network-outline"></ion-icon> Projects</Link></li>
                </ul>
                )}
            </div>
                )}
        </div>
            {/* Conteúdo do Sidebar */}
            <ul>
                <li className="logo"><Link><span>
                    <img className="logo" src={Logo} alt="logo" title="logoTC"/>
                    </span>
                    </Link>
                </li>
                <li><Link className="father"><span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span className="titulo">Home</span>
                    <Link to="/"></Link>
                    </Link>
                </li>
                <li><Link className="father"><span className="icon">
                    <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span className="titulo">About</span>
                    <Link to="/About"></Link>
                    </Link>
                </li>
                <li><Link className="father"><span className="icon">
                    <ion-icon name="git-network-outline"></ion-icon>
                    </span>
                    <span className="titulo">Projects</span>   
                    <Link to="/Projects"></Link></Link>
                </li>
            </ul>
    </S.Container>
);
}

export default Sidebar