import React, { useEffect } from 'react'
import * as S from './style.jsx'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/git.png'
import Github from "../assets/github.png"
import javascript from '../assets/javascript.png'
import vscode from '../assets/vscode.png'
import windows from '../assets/windows.png'
import styledC from "../assets/styled-components.jpg"

export default function Home() {
  const home = [
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
      image: styledC
    },
    {
      name: 'Github',
      image: Github
    },
    {
      name: 'VS Code',
      image: vscode
    },
    {
      name: 'Windows',
      image: windows
    },
    {
        name: 'git',
        image: git
      }
  ]

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('home')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })

  return (
    <S.HomeSection>
      <S.Haga2>Hello World!</S.Haga2>
      <S.HomeContainer>
        {home.map((item, index) => (
          <S.IconContainer key={index.imag}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </S.IconContainer>
        ))}
      </S.HomeContainer>
    </S.HomeSection>
  )
}
