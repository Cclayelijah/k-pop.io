import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { levelExp } from "../../global";

interface Props {
  idolExp: number;
  idolLevel: number;
  party: ({ id: number; energy: number; deployed: boolean } | null)[];
}

const PlayerPanel: React.FC<Props> = ({ idolExp, idolLevel, party }) => {
  return (
    <Container>
      <div className="propic"></div>
      <div className="exp">
        <ProgressBar value={idolExp} max={levelExp(idolLevel)} size={"xs"} />
      </div>
      <div className="party">
        {party.map((idol) => {
          if (!idol) return <div className="empty"></div>;
          if (idol.energy === 0) return <div className="beat"></div>;
          return <div className="active"></div>;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 16px;
  .propic {
    width: 100%;
    height: 30vw;
    border: 12px solid #2c3e50;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .exp {
    width: 100% .bar {
      background-color: #90a0d9;
    }
  }
  .party {
    display: flex;
    width: fit-content;
    padding: 8px;
    gap: 8px;
    border-radius: 4px;
    background-color: #2c3e50;
    * {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    }
    .empty {
      background-color: #566573;
    }
    .beat {
      background-color: #cccccc;
    }
    .active {
      background-color: #bb8fce;
    }
  }
`;

export default PlayerPanel;
