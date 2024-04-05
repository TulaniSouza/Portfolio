import React, {useEffect} from "react"
import * as S from "./style.jsx"
import Tulani from "../assets/Tulani.jpg"
import react from "../assets/react.svg"
import html from "../assets/html5.svg"
import css from "../assets/css3.svg"
import git from "../assets/git.svg"
import javascript from "../assets/javascript.svg"
import vscode from "../assets/vscode.svg"
import sComponents from "../assets/styled-components.png"
import windows from "../assets/windows.svg"


const Home = () => {
    const { t } = useTranslation()
  const skills = [
    {
      name: 'HTML',
      image: html
    },
    {
      name: 'CSS',
      image: css
    },
    {
      name: 'JavaScript',
      image: javascript
    },
    {
      name: 'React',
      image: react
    },
    {
      name: 'Styled C.',
      image: sComponents
    },
   
    {
      name: 'Git',
      image: git
    },
    
    {
      name: 'VS Code',
      image: vscode
    },
    {
      name: 'Windows',
      image: windows
    }
  ]

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('skills')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })

    return(
    <S.Text>
        <S.Image src={Tulani} alt="Tulani" title="Tulani"/>
        <S.Haga2>Hello World!</S.Haga2>
        <S.Paragrafo>Uma Desenvolvedora Web Frontend, que gosta de
            resolver problemas e pensar em diversas aternativas,
            constantemente em busca de novos conhecimentos.
        </S.Paragrafo>
        <S.SkillsContainer>
            {skills.map((item, index) => (
            <S.IconContainer key={index}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
        </S.IconContainer>
        ))}
      </S.SkillsContainer>
    
    </S.Text>
        
      
    )
}
export default Home