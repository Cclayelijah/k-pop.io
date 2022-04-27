import React, { useState } from "react";
import styled from "styled-components";

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  }

  function handlePassword(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container>
      <div className="top">
        <div className="pane">
          <img
            src="/images/login1.png"
            alt="BLACKPINK"
            width="100%"
            height="100%"
          />
        </div>
        <div className="main">
          <div className="wrapper">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleEmail}
                value={email}
                type="text"
                name="email"
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={handlePassword}
                value={password}
                type="text"
                name="email"
                autoComplete="off"
              />
              <input type="submit" value="Login" />
            </form>
            <div className="between">
              <span>Create Account</span>
              <span>Forgot Password?</span>
            </div>
          </div>
        </div>
        <div className="pane">
          <img src="/images/login2.png" alt="ITZY" width="100%" height="100%" />
        </div>
      </div>
      <div className="bottom">Carousel</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  background-color: #cccccc;
  border: 10px solid #566573;
  height: 100vh;
  box-sizing: border-box;
  .top {
    display: flex;
    flex: 1;
    max-height: 80vh;
    img {
      display: flex;
    }
    .main {
      border-right: 10px solid #566573;
      border-left: 10px solid #566573;
      background-image: url("/images/bg.png");
      background-size: cover;
      background-position: left;
      background: 
      display: flex;
      flex: 1;
      padding: 40px;
      justify-content: center;
      align-items: center;
      background-color: #EEDEE1;
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        height: 100%;
        justify-content: center;
        max-width: 370px;
        h1 {
          margin: 16px 0;
        }
      }
    }
  }
  .bottom {
    display: flex;
    background-color: #2c3e50;
    height: 20vh;
    border-top: 10px solid #566573;
  }

  @media only screen and (max-width: 1700px) {
    .main {
      background-image: none !important;
      .wrapper {
      margin: 0 auto;
      }
    }
  }
`;

export default Login;
