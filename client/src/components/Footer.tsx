import React from "react";
import styled from "styled-components";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <span> Copyright &copy; 2022 | k-pop.io</span>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export default Footer;
