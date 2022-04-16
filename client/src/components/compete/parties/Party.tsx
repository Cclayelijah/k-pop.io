import React from "react";
import styled from "styled-components";
import PartyCard from "./PartyCard";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  handleIdol: (idol: number) => void;
}

const Party: React.FC<Props> = ({ handleIdol }) => {
  return (
    <Container>
      <SimpleGrid columns={5} spacing={"12px"}>
        <div className="link" onClick={() => handleIdol(4)}>
          <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
        </div>
        <div className="link" onClick={() => handleIdol(4)}>
          <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
        </div>
        <div className="link" onClick={() => handleIdol(4)}>
          <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
        </div>
        <div className="link" onClick={() => handleIdol(4)}>
          <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
        </div>
        <div className="link" onClick={() => handleIdol(4)}>
          <PartyCard name="Ryujin" image="/images/yeji.jpeg" level={24} />
        </div>
      </SimpleGrid>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2c3e50;
  padding: 16px;
  .link {
    display: flex;
    flex: 1;
  }
`;

export default Party;
