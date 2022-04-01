import React from "react";
import styled from "styled-components";

function PartyCard({ name, image, level }) {
  return (
    <Container>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h4>{level}</h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #566573;
  flex: 1;
  border-radius: 8px;
  padding: 8px;
  .image {
    display: flex;
    background-color: #566573;
    border: 4px solid #bb8fce;
    border-radius: 4px;
    width: 100%;
    min-height: 60px;
    box-sizing: border-box;
    margin-bottom: 4px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`;

export default PartyCard;
