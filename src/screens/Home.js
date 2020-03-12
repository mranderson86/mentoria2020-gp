import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/HeaderComponent";
import ContainerMainComponent from "../components/ContainerMainComponent";

function Home(props) {
  return (
    <>
      <HeaderComponent
        style={{
          width: 1280,
          height: 64
        }}
        text1=""
      ></HeaderComponent>
      <ContainerMainComponentStack>
        <ContainerMainComponent
          style={{
            top: 0,
            left: 0,
            width: 1284,
            height: 736,
            position: "absolute"
          }}
        ></ContainerMainComponent>
        <Image
          src={require("../assets/images/programming_mentoria.jpg")}
        ></Image>
      </ContainerMainComponentStack>
    </>
  );
}

const Image = styled.img`
  top: 236px;
  left: 742px;
  width: 500px;
  height: 500px;
  position: absolute;
  object-fit: contain;
`;

const ContainerMainComponentStack = styled.div`
  width: 1284px;
  height: 736px;
  position: relative;
`;

export default Home;
