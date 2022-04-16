import React from "react";
import styled from "styled-components";
import { PartyMargin } from "../../styled/Custom";
import NextParties from "./NextParties";
import PrevParties from "./PrevParties";

interface Props {
  viewing: number;
}

const Parties: React.FC<Props> = ({ viewing }) => {
  function back(step: number) {
    let last: number = viewing - step;
    if (last < 1) last = 5;
    return last;
  }

  function next(step: number) {
    let last: number = viewing + step;
    if (last > 5) last = 1;
    return last;
  }

  return (
    <Container>
      <PartyMargin />
      <NextParties runnerUp={back(1)} inQueue={back(2)} />
      <PrevParties runnerUp={next(1)} inQueue={next(2)} />
      <PartyMargin />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export default Parties;
