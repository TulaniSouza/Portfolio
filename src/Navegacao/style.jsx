import styled from "styled-components";

export const Lista= styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
width: 60%;
height: 20vh;
align-items:center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 25px;
cursor:pointer;

`
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

export const Screen= styled.img`
width: 7%;
height: 7%;
cursor:pointer;

`

export const Photo= styled.img`
width: 8%;
cursor: pointer;

`
export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;