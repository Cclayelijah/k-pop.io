import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="form-wrapper">
              <h1>Login</h1>
              <form onSubmit={handleLogin}>
                <div className="section">
                  <div className="item">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={(e) => {
                        e.preventDefault();
                        setEmail(e.currentTarget.value);
                      }}
                      value={email}
                      type="text"
                      id="email"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="section">
                  <div className="item">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.currentTarget.value);
                      }}
                      value={password}
                      type="password"
                      id="password"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="around">
              <span>
                <Link to={"/register"}>Create Account</Link>
              </span>
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
      .form-wrapper {
        background-color: #2c3e50;
        color: #cccccc;
        border-radius: 16px;
        h1 {
          padding: 0 24px;
        }
        form {
          border-radius: 0 0 16px 16px;
        }
      }
      }
    }
  }
`;

export default Login;
