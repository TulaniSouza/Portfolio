import styled from "styled-components";

export const Midia= styled.section`
display:flex;
height: 40vh;
width: 50vw;
align-items: center;
margin-left:30%;
 box-shadow: 30px 30px rgba(139, 9, 9, 0.6);
 -webkit-box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.208);
margin-top:2em;

@media (max-width: 568px) {
margin:0 auto;
width:60vw; 
margin-top:1.5rem;
}
`
export const Listagem=styled.ul`
width: 80%; 
height: 90%; 
list-style: none;
display: flex;
justify-content: space-around;
margin-left: 12%;

li{
    width: 30%;
    height: 35%;
    margin-top:15%; 
    @media (max-width: 568px) {
    margin:0 auto;
    margin-top: 30%;
    width: 40%;
    height: 45%
}
}
`

export const Screen= styled.img`
width:75%;
height: 100%;
object-fit: contain;
`

export const Photo= styled.img`
width:75%;
height: 100%;
object-fit: contain;
`
export const Social= styled.img`
width:55%;
height: 100%;
object-fit: contain;

`