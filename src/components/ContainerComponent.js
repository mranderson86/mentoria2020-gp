import React from "react";
import styled from "styled-components";

function ContainerComponent(props) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
  background-color: rgba(60, 62, 85, 1);
`;

export default ContainerComponent;
