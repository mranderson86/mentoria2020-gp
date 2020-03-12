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
      />
      
      <ContainerMainComponent
          style={{
            width: "100%",
            height: "100vh"
          }}
      />
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

export default Home;
