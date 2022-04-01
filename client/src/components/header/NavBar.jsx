import React from "react";
import { Header } from "../styled/Custom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ title }) {
  return (
    <Header>
      <div className="title">
        <Link to="/">
          <h1>{title ? title : "K-pop.io"}</h1>
        </Link>
      </div>
      <nav>
        <Link to="/compete">
          <NavBox>
            <img src="/images/play.png" alt="Play" />
            <h5>Compete</h5>
          </NavBox>
        </Link>
        <Link to="/idols">
          <NavBox>
            <img src="/images/idols.png" alt="Idols" />
            <h5>Idols</h5>
          </NavBox>
        </Link>
        <Link to="/shop">
          <NavBox>
            <img src="/images/shop.png" alt="Shop" />
            <h5>Shop</h5>
          </NavBox>
        </Link>
        <Link to="/account">
          <NavBox>
            <img src="/images/rank.png" alt="Rank" />
            <h5>PolarEyes</h5>
          </NavBox>
        </Link>
      </nav>
    </Header>
  );
}

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
  width: 100px;
  margin-left: 4px;
  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  img {
    width: 60%;
    max-height: 60px;
    margin: 8px auto 0;
  }
  span {
    color: #bb8fce;
  }
`;

export default NavBar;
