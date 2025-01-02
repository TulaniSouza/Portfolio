import styled from "styled-components";

const breakpoints = {
  mobile: "350px",
  tablet: "768px",
};

export const Box = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  border: solid red;
  height: 83.2vh;
`
export const Imag = styled.section`
border:solid;
display: flex;
justify-content: space-evenly;


  @media (max-width: ${breakpoints.mobile}) {
    width: 70vw;
    height: 70vh;
  }
`;
export const Image = styled.img`
  width: 25vw;
  height: 80vh;
  border-radius: 50%;
  object-fit: contain;
  border: solid;

  @media (max-width: ${breakpoints.mobile}) {
    width: 70vw;
    height: 70vh;
  }
`;
export const Text = styled.section`
display: flex;
  gap: 20px;
  /* max-width: 70%; */
  width: 69%;
  height: 40%;
  text-align: center;
  border: solid blue;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Paragrafo = styled.p`
  flex: 1;
  font-size: 1.2rem;
  color: #5f2a7d;
  line-height: 1.3;
  display:flex;
  border:solid;
  padding: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;


export const Container = styled.section`
 flex-shrink: 1;
  width: 39%;
  /* max-width:100%; */
  height: 54%;
  object-fit: cover;
  display: flex;
  gap: 5px;
  margin-left: 25%;
  border:solid 8px;


  .carousel .control-prev.control-arrow,
  .carousel .control-next.control-arrow {
    width: 30px; 
    height: 30px; 
    border-radius: 50%; 
  }

  .carousel .control-prev.control-arrow::before,
  .carousel .control-next.control-arrow::before {
    font-size: 1rem; 
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
  }

`;


export const BoxImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid orange;
  height: 75%;

  img {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    object-fit: cover;
    border:solid yellowgreen;
  
  }
`;

export const Legend = styled.figcaption`
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  font-weight: 600;
  border: solid pink;
`;
