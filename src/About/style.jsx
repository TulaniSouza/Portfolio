import styled from "styled-components";

export const Text= styled.section`
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 5%;

@media (min-width:687px) and (max-width:702px){
flex-direction: column;
height: 73vh;
}
@media (min-width:482px) and (max-width:686px){
height: 77vh;
width: 99vw;
}
@media (min-width:350px) and (max-width:481px){
height: 77.1vh;
}
@media (min-width:152px) and (max-width:349px){
height: 88vh;
margin:0 auto;
top:65%;
font-size: 20px;
}
`
export const Image= styled.img`
width: 10em;
height: 15em;
border-radius: 50%;
margin-left: 20%;

@media (min-width:687px) and (max-width:702px){
margin-bottom: 15rem;
}
@media (min-width:482px) and (max-width:686px){
margin-bottom: 12rem;
height: 13em;

}
@media (min-width:350px) and (max-width:481px){
height: 32vh;
width: 8em;
margin-bottom: 19em;
}
@media (min-width:152px) and (max-width:349px){
margin:0 auto;
margin-bottom:74%;
height: 35vh;
width: 7em;
}

`

export const Paragrafo= styled.p`
font-size: 25px;
color: #5f2a7dda;
text-align: center;
margin-left: 10%;
width: 30%;

@media (min-width:687px) and (max-width:702px){
position:absolute;
width: 75%;
height: auto;
margin-top:25%;
font-size: 20px;

}
@media (min-width:482px) and (max-width:686px){
position:absolute;
width: 96%;
height: 34%;
margin-top:40%;
font-size: 20px;
margin-right: 10%;
}
@media (min-width:350px) and (max-width:481px){
position:absolute;
width: 96%;
height: 34%;
margin-top:12em;
font-size: 20px;
margin-right: 10%;
}
@media (min-width:152px) and (max-width:349px){
position:absolute;
width: 96%;
height: 34%;
margin:0 auto;
top:49%;
font-size: 20px;
}
`
