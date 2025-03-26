import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #e90c2a;
z-index: 1000;

    @media (max-width: 768px) {
        height: 60px;
    }
`;

export const HeaderBranding = styled.h1`
    color: #fef6ec;
    font-size: 30px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;