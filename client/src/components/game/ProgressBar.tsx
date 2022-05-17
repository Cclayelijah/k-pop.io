import styled from "styled-components";
import React from "react";

interface Props {
  value: number;
  max?: number;
  reverse?: boolean;
  size?: string;
  rel?: boolean;
}

const ProgressBar: React.FC<Props> = ({ value, max, reverse, size, rel }) => {
  if (!max) max = 100;
  let output: number = Math.round((value / max) * 100);
  let height: number = 12;
  if (size === "xs") height = 4;
  return (
    <Container
      style={
        rel
          ? { position: "absolute", bottom: "-30px" }
          : { backgroundColor: "#cccccc" }
      }
    >
      <div
        className={reverse ? "bar reverse" : "bar"}
        style={{ width: `${output}%`, height: `${height}px` }}
      ></div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #566573;
  border-radius: 8px;
  width: 100%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  .bar {
    display: flex;
    border-radius: 8px;
    background-color: #bb8fce;
  }
  .reverse {
    float: right;
  }
`;

export default ProgressBar;
