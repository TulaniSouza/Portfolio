import React from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.jpg"


const Home = () => {
    return(
    <S.Text>
        <S.Image src={Tulani} alt="Tulani" title="Tulani"/>
        <S.Haga2>Hello World!</S.Haga2>
        <S.Paragrafo>Uma Desenvolvedora Web Frontend, que gosta de
            resolver problemas e pensar em diversas aternativas,
            constantemente em busca de novos conhecimentos.
        </S.Paragrafo>
    </S.Text>
    )
}
export default Home