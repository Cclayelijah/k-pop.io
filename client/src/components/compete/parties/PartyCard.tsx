import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  image: string;
  level: number;
}

const PartyCard: React.FC<Props> = ({ name, image, level }) => {
  return (
    <Container>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <p>{name}</p>
        <p>{level}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #566573;
  border-radius: 8px;
  padding: 12px;
  .image {
    display: flex;
    background-color: #566573;
    border: 4px solid #bb8fce;
    border-radius: 4px;
    width: 100%;
    max-width: 200px;
    min-height: 60px;
    box-sizing: border-box;
    margin-bottom: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    color: #bb8fce;
  }
`;

export default PartyCard;
