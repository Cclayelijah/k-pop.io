import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameBar from "../components/header/GameBar";
import GameInfo from "../components/game/GameInfo";
import GamePanels from "../components/game/GamePanels";

interface Props {}

const Game: React.FC<Props> = () => {
  let party = [
    { id: 4, energy: 0, deployed: true },
    { id: 5, energy: 390, deployed: true },
    { id: 6, energy: 1000, deployed: false },
    null,
    null,
  ];
  // Player

  // Player Idol
  const [idol, setIdol] = useState(0);
  const [idolName, setIdolName] = useState("");
  const [idolLevel, setIdolLevel] = useState(0);
  const [idolExp, setIdolExp] = useState(0);
  const [idolEnergy, setIdolEnergy] = useState(0);
  const [idolCapacity, setIdolCapacity] = useState(0);
  // Opponent
  const [opUsername, setOpUsername] = useState("");
  // Opponent Idol
  const [opName, setOpName] = useState("");
  const [opLevel, setOpLevel] = useState(0);
  const [opEnergy, setOpEnergy] = useState(0);
  const [opCapacity, setOpCapacity] = useState(0);

  useEffect(() => {
    setIdolName("Ryujin");
    setIdolLevel(16);
    setIdolEnergy(700);
    setIdolCapacity(1575);
    setIdolExp(1200);

    setOpName("Irene");
    setOpLevel(24);
    setOpEnergy(400);
    setOpCapacity(2180);
  }, []);

  return (
    <Container>
      <GameBar
        idolName={idolName}
        idolLevel={idolLevel}
        idolEnergy={idolEnergy}
        idolCapacity={idolCapacity}
        opName={opName}
        opLevel={opLevel}
        opEnergy={opEnergy}
        opCapacity={opCapacity}
      />
      <GamePanels
        party={party}
        idolExp={idolExp}
        idolLevel={idolLevel}
        opLevel={opLevel}
        oppUsername={opUsername}
      />
      <GameInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #566573;
  height: 100vh;
`;

export default Game;
