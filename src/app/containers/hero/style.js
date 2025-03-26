import styled from "styled-components";


export const HeroContainer = styled.div`
    position: relative;
    background-image: url("https://media.moddb.com/images/downloads/1/129/128703/h1_sp64_ship_2017-10-07_18-59-35.png");
background-size: cover;
z-index:-2;


    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(233, 12, 42, 0.85);
    z-index: -1;
}
`;
