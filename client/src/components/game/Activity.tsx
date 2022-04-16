import React from "react";
import styled from "styled-components";

interface Props {}

const Activity: React.FC<Props> = () => {
  return (
    <Container>
      <div className="content"></div>
      <div className="bar">
        <p>---</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 24px;
    background: linear-gradient(180deg, rgba(44, 62, 80, 0) 0%, #2c3e50 100%);
  }
  .bar {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 24px;
    background-color: #2c3e50;
  }
`;

export default Activity;
