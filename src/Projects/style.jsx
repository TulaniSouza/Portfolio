import styled from "styled-components";

export const Container= styled. div`
width: 95vw;
height: 80vh;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
margin:0 auto;


`
export const Image= styled.img`
object-fit: contain;
height: 45%;
margin-top:5px;
gap: 3px;

-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}
@media (max-width:568px) {
  margin: 0 auto;
  width: 100%;
  bottom: 10%;
  height: auto;
}
`

export const Imagem= styled.img`
object-fit: contain;
height: 45%;
margin-top:5px;
gap: 3px;

-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}
@media (max-width:568px) {
  margin: 0 auto;
  width: 100%;
  bottom: 10%;
  height: auto;
}
`

export const ThereeImagem= styled.img`
object-fit: contain;
height: 45%;
margin-top:1px;
gap: 3px;

-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}
@media (max-width:568px) {
  margin: 0 auto;
  width: 100%;
  bottom: 10%;
  height: auto;
}
`

export const FourImage= styled.img`
object-fit: contain;
height: 45%;
margin-top:1px;
gap: 3px;


-webkit-transition: -webkit-transform .5s ease;
    transition: transform .5s ease;

&:hover{
  -webkit-transform: scale(1.2);
   transform: scale(1.2);
}
@media (max-width:568px) {
  margin: 0 auto;
  width: 100%;
  bottom: 10%;
  height: auto;
}
`