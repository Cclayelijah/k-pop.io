import React from "react";
import PlayerBar from "../game/PlayerBar";
import OpponentBar from "../game/OpponentBar";
import styled from "styled-components";

interface Props {
  idolName: string;
  idolLevel: number;
  idolEnergy: number;
  idolCapacity: number;
  opName: string;
  opLevel: number;
  opEnergy: number;
  opCapacity: number;
}

const GameBar: React.FC<Props> = ({
  idolName,
  idolLevel,
  idolEnergy,
  idolCapacity,
  opName,
  opLevel,
  opEnergy,
  opCapacity,
}) => {
  return (
    <Container>
      <PlayerBar
        name={idolName}
        level={idolLevel}
        energy={idolEnergy}
        energyCapacity={idolCapacity}
      />
      <VS>
        <h1>VS</h1>
      </VS>
      <OpponentBar
        name={opName}
        level={opLevel}
        energy={opEnergy}
        energyCapacity={opCapacity}
      />
    </Container>
  );
};

const VS = styled.div`
  margin: 0 48px;
`;

const Container = styled.div`
  padding: 24px;
  background-color: #2c3e50;
  display: flex;
  h1 {
    color: #bb8fce;
  }
`;

export default GameBar;
