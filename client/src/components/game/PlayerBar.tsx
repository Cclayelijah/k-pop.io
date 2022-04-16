import React from "react";
import styled from "styled-components";
import ProgressBar from "../game/ProgressBar";
import { ColSpace } from "../styled/Custom";

interface Props {
  name: string;
  level: number;
  energy: number;
  energyCapacity: number;
}

const PlayerBar: React.FC<Props> = ({
  name,
  level,
  energy,
  energyCapacity,
}) => {
  return (
    <Container>
      <div className="title">
        <h1>{name}</h1>
        <h4>Lvl {level}</h4>
      </div>
      <Energy>
        <p>{energy}</p>
      </Energy>
      <ProgressBar value={energy} max={energyCapacity} rel={true} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  .title {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    display: flex;
    width: fit-content;
    padding: 6px 12px;
    background-color: #bb8fce;
    color: #2c3e50;
  }
`;

const Energy = styled.div`
  display: flex;
  position: absolute;
  bottom: -18px;
  color: #566573;
  width: 100%;
  flex-direction: row-reverse;
`;

export default PlayerBar;
