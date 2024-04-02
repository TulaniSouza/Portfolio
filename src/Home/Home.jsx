import React from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.jpg"

function Home() {
    return(
    <S.Text>
        <S.Image src={Tulani} alt="Tulani" title="Tulani"/>
        <S.Haga2>Hello World!</S.Haga2>
    </S.Text>
        
    )
}
export default Home