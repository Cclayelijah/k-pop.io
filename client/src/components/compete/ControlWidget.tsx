import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {}

const ControlWidget: React.FC<Props> = () => {
  return (
    <Container>
      <Controls>
        <img src="/images/left.png" alt="Left" />
        <h3>Party 1</h3>
        <img src="/images/right.png" alt="Right" />
      </Controls>
      <Link to="/compete/1234">
        <Start>
          <h3>Start</h3>
        </Start>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2c3e50;
  display: flex;
  height: 72px;
`;

const Controls = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Start = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  box-sizing: border-box;
  background-color: #bb8fce;
  border: 4px solid #2c3e50;
  h3 {
    color: #2c3e50;
  }
`;

export default ControlWidget;
