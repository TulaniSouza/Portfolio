import styled from 'styled-components'

export const HomeSection = styled.section`
  max-width: 1120px;
  transition: all 0.3s ease;
  margin: 0 auto;
  padding: 25px;
  
  @media (min-width: 1200px) {
    position: relative;
    left: 50px;
  }
`
export const Title = styled.h2`
  position: relative;
  font-size: 36px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 25px;
    height: 4px;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 90px;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 15px;
  transition: all 0.3s ease;

  img {
    width: 50%;
    transition: all 0.3s ease;
  }
 
  &:hover {
    border-color: var(--highlightColor);
    
    img {
      transform: scale(1.1);
    }
  }
`
export const Haga2= styled.h2`
font-size: 50px;
white-space: nowrap;
overflow: hidden;
animation: typewriter 2s steps(15) infinite alternate,
blink 500ms steps(13) infinite normal;
border-right: 5px solid black;
margin-left: 35%;
position: absolute;
@keyframes typewriter {
from {
       width: 0%;
        }
        to {
          width: 7em;
        }
      }
      @keyframes blink {
        from {
          border-color: #3e3b3b;
          height: 0%;
        }
        to {
          border-color: transparent;
          height: 10%;

        }
        
      }
   
`