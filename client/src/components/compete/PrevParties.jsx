import React from "react";
import styled from "styled-components";

function PrevParties({ runnerUp, inQueue }) {
  return (
    <Container>
      <PartySmall>
        <div className="number">
          <h4>5</h4>
        </div>
        <div className="party">
          <Pic></Pic>
        </div>
      </PartySmall>
      <PartySmall>
        <div className="number">
          <h4>4</h4>
        </div>
        <div className="party">
          <Pic></Pic>
        </div>
      </PartySmall>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PartySmall = styled.div`
  display: flex;
  .party {
    flex: 1;
    display: flex;
  }
  .number {
    display: flex;
    width: 24px;
  }
`;

const Pic = styled.div`
  display: flex;
  background-color: #bb8fce;
  border: 8px solid #566573;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default PrevParties;
