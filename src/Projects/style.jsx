import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 79vh;
  position: relative;

  .carousel .slide img {
    object-fit: contain;
    height: 70%;
  }

  .carousel .control-dots {
    position: absolute;
    bottom: 50px; 
    z-index: 1;
  }

  .carousel .control-dots .dot {
    background: #888;
  }

  @media (max-width: 768px) {
    .carousel .slide img {
      max-height: 50%;
    }

    .carousel .control-dots {
      bottom: 15px;
    }
  }
`;

export const BoxImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  img {
    max-width: 60%;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Legend = styled.figcaption`
  font-size: 1.4em;
  color: #333;
  text-align: center;
  margin-top: 25px; 
  z-index: 3;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 15px;
  }
`;
