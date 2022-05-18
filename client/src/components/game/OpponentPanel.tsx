import React from "react";
import styled from "styled-components";

interface Props {
  party: ({ id: number; energy: number; deployed: boolean } | null)[];
}

const OpponentPanel: React.FC<Props> = ({ party }) => {
  return (
    <Container>
      <div className="propic"></div>
      <div className="exp"></div>
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
  align-items: flex-end;
  width: 30vw;
  gap: 16px;
  .propic {
    width: 30vw;
    height: 30vw;
    border: 12px solid #2c3e50;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .exp {
    width: 30vw;
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

export default OpponentPanel;
