import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <span> Copyright &copy; 2022 | k-pop.io</span>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export default Footer;
