import styled from "styled-components";

export const Text= styled.section`
display:flex;
align-items: center;

`
export const Image= styled.img`
width: 30%;
height: 55vh;
justify-content: space-evenly;
display: flex;
align-items: center;
margin-left:35%;
border-radius: 50%;

`
export const Haga2= styled.h2`
font-size: 30px;
white-space: nowrap;
overflow: hidden;
animation: typewriter 2s steps(13) infinite alternate,
blink 800ms steps(13) infinite normal;
border-right: 5px solid black;
margin-top: 30%;
margin-left: 35%;
position: absolute;
@keyframes typewriter {
from {
       width: 0%;
        }
        to {
          width: 15%;
        }
      }
      @keyframes blink {
        from {
          border-color: #3e3b3b;
          height: 0%;
        }
        to {
          border-color: transparent;
          height: 5%;

        }
        
      }

`
export const Paragrafo= styled.p`
font-size: 25px;
color: #5f2a7dda;
margin-top: 43rem;
text-align: center;
margin-left: 30%;
width: 30%;
position: absolute;
`