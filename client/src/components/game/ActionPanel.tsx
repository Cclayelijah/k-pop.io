import React from "react";
import styled from "styled-components";

interface Props {}

const ActionPanel: React.FC<Props> = () => {
  const handleHip = () => {
    console.log("hip");
  };
  const handleHop = () => {
    console.log("hop");
  };
  const handlePop = () => {
    console.log("pop");
  };
  const handleTip = () => {
    console.log("tip");
  };

  return (
    <Container>
      <div>
        <button className="link" onClick={handleHip}>
          <h3>Hip</h3>
        </button>
        <button className="link" onClick={handleHop}>
          <h3>Hop</h3>
        </button>
      </div>
      <div>
        <button className="link" onClick={handlePop}>
          <h3>Pop</h3>
        </button>
        <button className="link" onClick={handleTip}>
          <h3>Tip</h3>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  div {
    display: flex;
    gap: 16px;
  }
  button {
    display: flex;
    padding: 0;
    width: 100px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 4px solid #2c3e50;
    h3 {
      display: flex;
      width: fit-content;
      color: #2c3e50;
      margin: 0 auto;
    }
  }
`;

export default ActionPanel;
