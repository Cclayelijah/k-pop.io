import React from "react";
import styled from "styled-components";

interface Props {}

const Info: React.FC<Props> = () => {
  return (
    <Container>
      <h3>Win Streak: 2</h3>
      <h3>Party Lvl: 24</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  h3 {
    color: #2c3e50;
  }
`;

export default Info;
