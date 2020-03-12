import React from "react";
import styled from "styled-components";
import ContainerComponent from "./ContainerComponent";

function ContainerMainComponent(props) {
  return (
    <Container {...props}>
      <ContainerComponentStack>
        <ContainerComponent
          style={{
            top: 0,
            left: 0,
            width: 1280,
            height: 736,
            position: "absolute"
          }}
        ></ContainerComponent>
        <Group>
          <PathStack>
            <svg
              viewBox="0 0 641 366.0020454541225"
              style={{
                top: 0,
                left: 0,
                width: 1280,
                height: 733,
                position: "absolute"
              }}
            >
              <path
                strokeWidth={1}
                fill="rgba(98,94,168,1)"
                stroke="rgba(98,94,168,1)"
                d="M639.00 0.00 C638.00 -1.00 0.00 365.00 0.00 365.00 L641.00 366.00 C641.00 366.00 640.00 1.00 639.00 0.00 Z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 400.00 400.00"
              style={{
                top: 302,
                left: 438,
                width: 400,
                height: 400,
                position: "absolute"
              }}
            >
              <ellipse
                strokeWidth={1}
                fill="rgba(98,94,168,1)"
                stroke="rgba(98,94,168,1)"
                cx={200}
                cy={200}
                rx={200}
                ry={200}
              ></ellipse>
            </svg>
            <svg
              viewBox="0 0 400.00 400.00"
              style={{
                top: 102,
                left: 716,
                width: 400,
                height: 400,
                position: "absolute"
              }}
            >
              <ellipse
                strokeWidth={1}
                fill="rgba(98,94,168,1)"
                stroke="rgba(98,94,168,1)"
                cx={200}
                cy={200}
                rx={200}
                ry={200}
              ></ellipse>
            </svg>
            <SubtitleContent>Bem Vindo</SubtitleContent>
            <TitleContent>Acesse ao portal da Mentoria 2020</TitleContent>
            <ButtonPortal>
              <ButtonOverlay href="https://portal-mentoria2020.netlify.com/">
                <TitleButton>Mentoria 2020</TitleButton>
              </ButtonOverlay>
            </ButtonPortal>
          </PathStack>
        </Group>
      </ContainerComponentStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 736px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const SubtitleContent = styled.span`
  font-family: Roboto;
  top: 150px;
  left: 135px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
`;

const TitleContent = styled.span`
  font-family: Roboto;
  top: 212px;
  left: 135px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;

const ButtonPortal = styled.div`
  top: 287px;
  left: 135px;
  width: 256px;
  height: 64px;
  background-color: rgba(98, 94, 168, 1);
  position: absolute;
  border-radius: 15px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 5px 5px 0px 0.2px rgba(0, 0, 0, 1);

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

const PathStack = styled.div`
  width: 1280px;
  height: 733px;
  position: relative;
`;

const ContainerComponentStack = styled.div`
  width: 1280px;
  height: 736px;
  position: relative;
`;

export default ContainerMainComponent;
