import styled from "styled-components";
import { breakpoint } from "../Mixin/mixin";


export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  padding: 2rem;
  border:solid;
  position: relative;

  .carousel .control-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0,0,0,0.2); 
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(50%);
  opacity: 0.7;              
  transition: background 0.3s, opacity 0.3s;
}

.carousel .control-prev {
  left: 13rem;
}

.carousel .control-next {
  right: 13rem;
}

.carousel .control-arrow:hover {
  background: rgba(0,0,0,0.6); 
  opacity: 1;
}

.carousel .control-arrow::before {
  font-size: 1.5rem;
  color: white; 
}

  ${breakpoint('small')`
  .carousel .slide img {
      max-height: 40vh;
      max-width:95%;
      object-fit:contain;
      border:solid;
    }
    .carousel .control-prev, .carousel .control-next {
      top:auto;
      bottom:5rem;
      transform:none;
      border:solid;
    }
    .carousel .control-prev { left:25%;}
    .carousel .carousel-next { right: 25%;}
  
  `}
  ${breakpoint("large")`
    .carousel .slide img {
      height: 70%;
    }
    .carousel .control-dots {
      bottom: 15px;
    }
      .carousel .control-prev { left: 2rem; }
    .carousel .control-next { right: 2rem; }
  `}
`;

export const BoxImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  img {
    max-width: 60%;
    height: 60%;
    margin-bottom: 10px;
  }

  ${breakpoint('small')`
    border:solid orange;
    width:95%;
    justify-content:center;

  `}
`;

export const Legend = styled.figcaption`
  font-size: 1.4em;
  color: #333;
  text-align: center;
  margin-top: 25px; 
  z-index: 3;
  position: relative;

  
  ${breakpoint("large")`
    font-size: 0.9rem;
  `}
    
  
`;
