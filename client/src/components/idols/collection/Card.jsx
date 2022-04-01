import React from "react";
import styled from "styled-components";
import League from "./League";

function Card({ img, name, league }) {
  return (
    <Container>
      <League league={league} />
      <img src={img} />
      <h4>{name}</h4>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: #bb8fce;
  padding: 12px 12px 8px;
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 100px;
  max-width: 200px;
  margin-right: 8px;
  img {
    width: 100%;
    border-radius: 4px;
    background-color: #2c3e50;
  }
  h4 {
    margin-top: 4px;
    color: #2c3e50;
  }
`;

export default Card;
