import React from "react";
import styled from "styled-components";
import PlayerPanel from "./PlayerPanel";
import ActionPanel from "./ActionPanel";
import OpponentPanel from "./OpponentPanel";

interface Props {
  idolLevel: number;
  idolExp: number;
  opLevel: number;
  oppUsername: string;
  party: ({ id: number; energy: number; deployed: boolean } | null)[];
}

const GamePanels: React.FC<Props> = ({
  party,
  idolLevel,
  idolExp,
  opLevel,
}) => {
  return (
    <Container>
      <PlayerPanel idolLevel={idolLevel} idolExp={idolExp} party={party} />
      <ActionPanel />
      <OpponentPanel party={party} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 32px 24px 0;
`;

export default GamePanels;
