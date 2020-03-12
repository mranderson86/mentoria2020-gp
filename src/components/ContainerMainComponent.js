import React from "react";
import styled from "styled-components";

function ContainerMainComponent(props) {
  return (
    <Container {...props}>
      <ContainerComponentStack>
        <Group>
          <SubtitleContent>Bem Vindo</SubtitleContent>
          <TitleContent>Acesse ao portal da Mentoria 2020</TitleContent>
          <ButtonPortal>
            <ButtonOverlay href="https://portal-mentoria2020.netlify.com/">
              <TitleButton>Mentoria 2020</TitleButton>
            </ButtonOverlay>
          </ButtonPortal>
        </Group>
        <Image src={require("../assets/images/image_bg.jpg")} />
      </ContainerComponentStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  margin-top: 5%;
`;

const ButtonOverlay = styled.a`
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;
const Group = styled.div`
  background-color: rgba(60, 62, 85, 1);
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1%;
`;

const SubtitleContent = styled.span`
  font-family: Roboto;
  color: rgba(255, 255, 255, 1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
`;

const TitleContent = styled.span`
  font-family: Roboto;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;

const ButtonPortal = styled.div`
  width: 256px;
  height: 64px;
  background-color: rgba(98, 94, 168, 1);
  border-radius: 15px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 5px 5px 0px 0.2px rgba(0, 0, 0, 1);
  margin-top: 5%;

  &:hover {
    background-color: rgba(98, 94, 168, 0.75);
  }
`;

const TitleButton = styled.span`
  font-family: Roboto;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;

const ContainerComponentStack = styled.div`
  /* background-color: rgba(60, 62, 85, 1); */
  background-color: #3c3e55
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5%;
`;

export default ContainerMainComponent;
