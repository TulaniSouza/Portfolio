import styled from "styled-components";

export const Image= styled.img`
display: flex;
border-radius: 60%;
width: 13%;
justify-content: center;

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
  
}

& :hover{
  color: #ff0077;
}


`

// export const Screen= styled.img`
// width: 7%;
// height: 7%;
// cursor:pointer;
// border:solid;
// display: flex;

// `

// export const Photo= styled.img`
// width: 8%;
// cursor: pointer;

// `