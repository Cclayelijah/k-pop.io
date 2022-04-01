import React from "react";
import styled from "styled-components";

function League({ league }) {
  return (
    <Container>
      <h4>{league}</h4>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bb8fce;
  position: absolute;
  top: -14px;
  right: -14px;
  h4 {
    margin: 0;
    text-align: center;
    color: #2c3e50;
    height: fit-content;
  }
`;

export default League;
