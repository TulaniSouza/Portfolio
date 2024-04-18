import styled from "styled-components";

export const Image= styled.img`
display: flex;
border-radius: 60%;
width: 13%;


@media (max-width: 568px) {
margin: 0;
width: 21%;
margin-right:80%;
cursor:pointer;
}

`
export const Nav= styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
text-decoration: none;


`

export const Lista= styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
width: 60%;
height: 20vh;
align-items:center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

cursor:pointer;


li{
  width: 200px;
  line-height: 40px;
  font-size: 22px;
  font-family: sans-serif;
  letter-spacing: 3px;
  text-align: center;
  
  @media (max-width: 568px) {
  display: ${(props) => (props.open ? "flex" : "none")}

}
@media (max-width: 568px) {
  width:90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor:pointer;
}
}

& :hover{
  color: #ff0077;
}
@media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 84px;
    margin-right:75%;
    height: 35%;
    width: 23%;
  };


`
