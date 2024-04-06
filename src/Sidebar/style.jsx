import styled from "styled-components";

export const SideBar = styled.section`
  height: 100vh;
  width: 14vw;
  background-color: #171923;
  border-right: solid white 1px;
  position: absolute;
  transition: 1s;
  left: ${(props)=> props.isOn ? '0%': '-20%'};
`

export const ListaSideBar = styled.nav`
height: 18vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
list-style: none;
padding-left:2vw;
font-size: 1.5vw;
`

export const CloseSideBar = styled.p`
  position: relative;
  left: 11vw;
  top: 2vh;
  width: 15%;
  font-size: 2vw;
  color: #ffff;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`
