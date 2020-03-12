import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/HeaderComponent";

function Header(props) {
  return (
    <Container>
      <HeaderComponent
        style={{
          width: 1280,
          height: 64
        }}
      ></HeaderComponent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default Header;
