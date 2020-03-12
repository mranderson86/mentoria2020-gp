import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/HeaderComponent";
import ContainerMainComponent from "../components/ContainerMainComponent";

function Home(props) {
  return (
    <Layout>
      <HeaderComponent
        style={{
          width: "100%",
          height: 100
        }}
        text1=""
      ></HeaderComponent>
      <ContainerMainComponentStack>
        <ContainerMainComponent
          style={{
            // top: 0,
            // left: 0,
            // width: 1284,
            // height: 736,
            // position: "absolute"
            width: "100%",
            height: "100vh"
          }}
        ></ContainerMainComponent>
        <Image
          src={require("../assets/images/programming_mentoria.jpg")}
        ></Image>
      </ContainerMainComponentStack>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  top: 255px;
  left: 750px;
  width: 500px;
  height: 500px;
  position: absolute;
  object-fit: contain;
`;

const ContainerMainComponentStack = styled.div`
  /* width: 1280px;
  height: 736px;
  position: relative; */
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default Home;
