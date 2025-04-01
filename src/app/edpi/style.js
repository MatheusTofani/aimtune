import styled from "styled-components";

export const ContainerCalculator = styled.div`
  height: auto;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
`;
