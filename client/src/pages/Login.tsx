import React from "react";
import styled from "styled-components";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <Container>
      <div className="top">
        <div className="pane"></div>
        <div className="main"></div>
        <div className="pane"></div>
      </div>
      <div className="bottom">Carousel</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #566573;
  height: 100vh;
  box-sizing: border-box;
  .top {
    display: flex;
    flex: 1;
    img {
      display: flex;
    }
    .main {
      flex: 1;
    }
  }
  .bottom {
    display: flex;
    background-color: #2c3e50;
    height: 20vh;
  }
`;

export default Login;
