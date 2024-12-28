import React from 'react'
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Navegacao/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
  background-color: #e1e1e1f0;
}
`

function App() {

  return (
    <>
     <GlobalStyle/>
     <Navegacao/>
    </>
  )
}
export default App
