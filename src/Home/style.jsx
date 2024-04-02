import styled from "styled-components";

export const Text= styled.section`
display:flex;

`
export const Image= styled.img`
width: 30%;
height: 10%;
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
        margin-top: 10%;
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
          border-color: #151414;
          height: 20%;
        }
        to {
          border-color: transparent;
          height: 20%;

        }
        
      }

`