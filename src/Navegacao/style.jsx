import styled from "styled-components";

export const Image = styled.img`
  border-radius: 60%;
  width: 10%;
  cursor: pointer;
  /* transition: transform 0.3s; */
  border:solid;

  /* &:hover {
    transform: scale(1.1);
  } */

  @media (max-width: 568px) {
    width: 30%;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 90%;


  li {
    text-align: center;
    letter-spacing: 1px;
    font-size: 1.5rem;


    a {
      text-decoration: none;
      color: #333;
      transition: color 0.3s;
      --s: 0.1em;   
      --c: #ff0077; 
  
      color: #0000;
      padding-bottom: var(--s);
      background: 
        linear-gradient(90deg,var(--c) 50%,#b28116 0) calc(100% - var(--_p,0%))/200% 100%,
        linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
        -webkit-background-clip: text,padding-box;
        background-clip: text,padding-box;
        transition: 0.5s;
    }
      &:hover {
        --_p: 100%;      
      }
  }

  @media (max-width: 568px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
    width: 30%;
    display: ${(props) => (props.open ? "flex" : "none")};
    z-index: 10;

    li {
      margin: 10px;
    }
  }
`;
