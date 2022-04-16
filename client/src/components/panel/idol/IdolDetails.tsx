import React from "react";
import styled from "styled-components";
import { ColSpace } from "../../styled/Custom";

interface Props {
  name: string;
  group: string;
  level: number;
  league: number;
  stats: {
    skill: number;
    energy: number;
    rap: number;
    dance: number;
    sing: number;
  };
  position: {
    main?: string[];
    lead?: string[];
    sub?: string[];
    special?: string[];
  };
}

const IdolDetails: React.FC<Props> = ({
  name,
  group,
  level,
  league,
  stats,
  position,
}) => {
  return (
    <Container>
      <div className="row">
        <h3>{name}</h3>
        <div className="level">
          <h4>Lvl {level}</h4>
        </div>
      </div>
      <div className="content">
        <div className="stats">
          <div className="row">
            <p>Skill:</p>
            <p>{stats.skill}</p>
          </div>
          <div className="row">
            <p>Energy:</p>
            <p>{stats.energy}</p>
          </div>
          <div className="row">
            <p>Rap:</p>
            <p>{stats.rap}</p>
          </div>
          <div className="row">
            <p>Dance:</p>
            <p>{stats.dance}</p>
          </div>
          <div className="row">
            <p>Sing:</p>
            <p>{stats.sing}</p>
          </div>
        </div>
        <div className="positions">
          {position.main &&
            position.main.map((pos) => {
              return <p>Main {pos}.</p>;
            })}
          {position.lead &&
            position.lead.map((pos) => {
              return <p>Lead {pos}.</p>;
            })}
          {position.sub &&
            position.sub.map((pos) => {
              return <p>Sub {pos}.</p>;
            })}
          {position.special &&
            position.special.map((pos) => {
              return <p>{pos}.</p>;
            })}
        </div>
      </div>
      <ColSpace>
        <div className="button">
          <h4>Swap</h4>
        </div>
      </ColSpace>
      <div className="row">
        <h3>{group}</h3>
        <div className="league">
          <h4>{league}</h4>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      margin: 0;
    }
  }
  .level {
    background-color: #90a0d9;
    display: flex;
    width: fit-content;
    padding: 4px 8px;
    h4 {
      color: #2c3e50;
    }
  }
  .content {
    display: flex;
    gap: 16px;
    .stats {
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: #90a0d9;
      padding: 8px;
      color: #2c3e50;
    }
    .positions {
      display: flex;
      flex: 1;
      flex-direction: column;
      color: #90a0d9;
      align-items: flex-end;
      justify-content: space-around;
      p {
        margin: 0;
      }
    }
  }
  .button {
    display: flex;
    border: 4px solid #bb8fce;
    align-self: center;
    width: fit-content;
    background-color: #566573;
    border-radius: 4px;
    padding: 10px 24px;
    h4 {
      color: #bb8fce;
    }
  }
  .button:hover {
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
  }
  .league {
    display: flex;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #90a0d9;
    h4 {
      color: #2c3e50;
    }
  }
`;

export default IdolDetails;
