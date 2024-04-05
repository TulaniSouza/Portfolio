import styled from "styled-components";


export const Container= styled.section`
display:flex;
`

export const Divisao= styled.div`
width: 100%;
    padding: 20px;
`
export const Sessao= styled.section`
background: #000;
    color: #fff;
    height: 100vh;
    width: 200px;
    transition: all 0.5s;
    box-shadow: 3px 0 0 #FF0077;
`

export const Box= styled.section`
display: flex;
align-items:center;
padding:20px 15px;
`
export const HagaOne= styled.h1`
font-size: 30px;
`
export const Block=styled.div`
display: flex;
font-size: 25px;
margin-left: 50px;
`
export const TwoBox= styled.section`
display: flex;
color: #fff;
padding: 10px 15px;
gap: 15px;
transition: all 0.5s;
flex-direction: column;


.link:hover{
background:lightskyblue;
color: #000;
transition: all 0.5s;

}
.active{
background: #FF0077;
color: #000;
border: solid pink;
color: #fff;
text-decoration: none;
font-size: 20px;
padding: 20px 4%;
display: flex;
margin-bottom: 20px;
line-height: 20px;
}
.icon, .link_text{
font-size: 20px;
transition: .5s;

}
`

export const Screen= styled.img`
width: 27%;
height: 7%;
cursor:pointer;
border:solid green;
background: #FF0077;
display:flex;


`

export const Photo= styled.img`
width: 28%;
cursor: pointer;
border: solid yellow;
background: #FF0077;

`