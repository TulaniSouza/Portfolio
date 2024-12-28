import styled from "styled-components";

const breakpoints = {
  mobileS: '350px',
  mobileM: '482px',
  mobileL: '687px',
  tablet: '703px',
};

export const Text = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 73vh;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    height: 77vh;
    width: 99vw;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    height: 77.1vh;
  }
  @media (max-width: ${breakpoints.mobileS}) {
    height: 87vh;
    margin: 0 auto;
    top: 65%;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 25%;
  height: 35%;
  border-radius: 45%;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 35%;
    height: 55%;
    width: 30%;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    margin-bottom: 12rem;
    height: 13em;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    height: 48%;
    width: 50%;

  }
  @media (max-width: ${breakpoints.mobileS}) {
    margin: 0 auto;
    margin-bottom: 74%;
    height: 38vh;
    width: 34%;
  }
`;

export const Paragrafo = styled.p`
  font-size: 25px;
  color: #5f2a7dda;
  text-align: center;
  margin-left: 10%;
  width: 30%;

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    width: 75%;
    margin-top: 25%;
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobileL}) {
    position: absolute;
    width: 96%;
    margin-top: 40%;
    font-size: 20px;
    margin-right: 10%;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    margin-top: 59%;
  }
  @media (max-width: ${breakpoints.mobileS}) {
    margin: 0 auto;
    top: 50%;
    font-size: 20px;
  }
`;
