import styled from "styled-components";

export const CalculadoraContainer = styled.div`
  border: solid 1px #e90c2a;
  background-color:rgb(250, 241, 231);
`;

export const CalculadoraInput = styled.input`
  background-color: #fef6ec;
  border: solid 1px #aaa;

  &:focus {
    border: solid 1px #e90c2a;
    outline: none;
  }
`;

export const CalculadoraForm = styled.form`
  height: 50%;
`;

export const Select = styled.select`
  background-color: #fef6ec;
  border: solid 1px #aaa;

  &:focus {
    border: solid 1px #e90c2a;
    outline: none;
  }
`;

export const CalculadoraFormLabel = styled.label`
font-weight: 500;
`;

export const CalculadoraTitle = styled.h2`
  
`;
