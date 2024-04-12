import styled from "styled-components";

export const Container= styled. div`
width: 98vw;
height: 80vh;
display:flex;
transition: all;
flex-wrap:wrap;
justify-content: space-evenly;


`
export const Image= styled.img`
object-fit: contain;
margin-left:1%;
width: 45%;
height: 45%;

-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}

`
export const Imagem= styled.img`
object-fit: contain;
width: 45%;
height: 45%;
margin-left:1%;

-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}

`

export const ThereeImagem= styled.img`
object-fit: contain;
margin-left:1%;
width: 44%;
height: 45%;
-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}
  
`

export const FourImage= styled.img`
object-fit: contain;
width: 44%;
height: 45%;
margin-left:1%;

-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}


`