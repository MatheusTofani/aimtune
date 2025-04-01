import styled from "styled-components";

export const TitleSensiCalculator = styled.h1`
    color: rgb(0, 0, 0);
    text-align: center;
`;

export const ContainerCalculator = styled.div`
  height: auto;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  position: relative;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  z-index: -1;
`;