import React from "react";
import styled from "styled-components";
import ContainerMainComponent from "../components/ContainerMainComponent";

function Content(props) {
  return (
    <Container>
      <ContainerMainComponent2Row>
        <ContainerMainComponent
          style={{
            width: 1284,
            height: 736,
            marginTop: 62
          }}
        ></ContainerMainComponent>
        <ContainerMainComponent
          style={{
            width: 1284,
            height: 736,
            marginLeft: 48
          }}
        ></ContainerMainComponent>
      </ContainerMainComponent2Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(98, 94, 168, 1);
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const ContainerMainComponent2Row = styled.div`
  height: 798px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -4px;
  margin-left: -1332px;
`;

export default Content;
