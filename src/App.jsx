import React from 'react'
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Navegacao/Navegacao.jsx"
import Sidebar from './Sidebar/index.jsx'
import SidebarItem from './SidebarItem/index.jsx'


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App() {

  return (
    <>
     <GlobalStyle/>
     <Navegacao/>
     <Sidebar/>
     <SidebarItem/>
    </>
  )
}
export default App
