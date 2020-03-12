import React from "react";
import styled from "styled-components";

function HeaderComponent(props) {
  return (
    <Container {...props}>
      <ContainerMainHeader>
        <TitleHeader>{props.text1 || "Mentoria 2020"}</TitleHeader>
      </ContainerMainHeader>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerMainHeader = styled.div`
  /* 
  top: 0px;
  left: 0px;
  position: absolute;
  width: 1280px; 
  height: 64px;
  */
  background-color: rgba(37, 35, 35, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleHeader = styled.span`
  font-family: Roboto;
  /* 
  top: 17px;
  left: 541px; 
  position: absolute;
  width: 500px;
  height: 500px;
  */
  color: rgba(255, 255, 255, 1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
`;

export default HeaderComponent;
