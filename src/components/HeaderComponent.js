import React from "react";
import styled from "styled-components";

function HeaderComponent(props) {
  return (
    <Container {...props}>
      <ContainerMainHeaderStack>
        <ContainerMainHeader></ContainerMainHeader>
        <TitleHeader>{props.text1 || "Mentoria 2020"}</TitleHeader>
      </ContainerMainHeaderStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerMainHeader = styled.div`
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 64px;
  background-color: rgba(37, 35, 35, 1);
  position: absolute;
`;

const TitleHeader = styled.span`
  font-family: Roboto;
  top: 17px;
  left: 541px;
  width: 500px;
  height: 500px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;

const ContainerMainHeaderStack = styled.div`
  width: 1280px;
  height: 517px;
  position: relative;
`;

export default HeaderComponent;
