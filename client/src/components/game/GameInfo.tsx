import React from "react";
import styled from "styled-components";
import Activity from "../game/Activity";
import Chat from "../game/Chat";

interface Props {}

const GameInfo: React.FC<Props> = () => {
  return (
    <Container>
      <Activity />
      <Chat />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 20vh;
  color: #cccccc;
  p {
    font-size: 1em;
  }
`;

export default GameInfo;
