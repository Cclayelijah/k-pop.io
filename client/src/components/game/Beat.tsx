import React from "react";
import styled from "styled-components";

// This component implements the rhythm aspect of the game, telling you when to click.
// Combos initiate ultimate moves, so don't mess up.
// The type of performance you do is based on what you click (rap, dance, sing).

interface Props {}

const Beat: React.FC<Props> = () => {
  return (
    <Container>
      <div className="space">
        <div className="core"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .space {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    // background-color: #cccccc;
    border-radius: 50%;
    .core {
      display: flex;
      background-color: #2c3e50;
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
    .core {
      outline: 4px solid #bb8fce;
      outline-offset: 40px;
    }
  }
`;

export default Beat;
