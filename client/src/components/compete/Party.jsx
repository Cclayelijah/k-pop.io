import React from "react";
import styled from "styled-components";
import PartyCard from "./PartyCard";

function Party() {
  return (
    <Container>
      <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
      <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
      <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
      <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
      <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #2c3e50;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default Party;
