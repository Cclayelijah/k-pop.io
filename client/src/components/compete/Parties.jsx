import React from "react";
import styled from "styled-components";
import NextParties from "./NextParties";
import PrevParties from "./PrevParties";

function Parties() {
  return (
    <Container>
      <NextParties />
      <PrevParties />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export default Parties;
