import styled from "styled-components";
import { breakpoint } from "../Mixin/mixin";

export const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${breakpoint('small')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  ${breakpoint('medium')`
    flex-direction: column;
    align-items: center;
  `}

  ${breakpoint('large')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const Imag = styled.section`
  width: 30vw;
  margin-left: 2rem;

  ${breakpoint('small')`
    width: 100%;
    margin-top: 2rem;
  `}

  ${breakpoint('medium')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  `}

  ${breakpoint('large')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  `}
`;

export const Image = styled.img`
  width: 20vw;
  border-radius: 50%;

  ${breakpoint('small')`
    width: 90%;
  `}

  ${breakpoint('medium')`
    width: 70%;
  `}

  ${breakpoint('large')`
    width: 60%;
  `}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  ${breakpoint('small')`
    height: 100%;
    margin: 2rem 0;
    gap: 1rem;
  `}

  ${breakpoint('medium')`
    height: 100%;
    margin: 2rem 0;
    gap: 1rem;
  `}

  ${breakpoint('large')`
    height: 100%;
    margin: 2rem 0;
    gap: 3rem;
  `}
`;

export const Text = styled.section`
  text-align: center;
  width: 90%;

  ${breakpoint('small')`
    width: 100%;
  `}
`;

export const Paragrafo = styled.p`
  flex: 1;
  font-size: 1.2rem;
  color: #5f2a7d;
  line-height: 1.3;
  display: flex;
  padding: 10px;

${breakpoint('small')`
  width: 100%;
  font-size: 1.2rem;
`}

${breakpoint('large')`
  width: 100%;
  font-size: 1.5rem;
`}
`;

export const Container = styled.section`
  width: 20vw;

.carousel .control-prev.control-arrow,
.carousel .control-next.control-arrow {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #5f2a7d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.carousel .control-prev.control-arrow::before,
.carousel .control-next.control-arrow::before {
    font-size: 1rem;
  }

  ${breakpoint('small')`
    width: 90%;
  `}

  ${breakpoint('medium')`
    width: 90%;
  `}

  ${breakpoint('large')`
    width: 90%;
  `}
  ${breakpoint('xlarge')`
    width: 40%;
  `}
`;

export const BoxImage = styled.figure`
img {
    object-fit: contain;
  }
`;

export const Legend = styled.figcaption`
  font-size: 0.9rem;
  color: #333;
  text-align: center;
font-weight: 600;
`;
