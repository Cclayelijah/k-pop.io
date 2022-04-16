import React from "react";
import styled from "styled-components";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import {
  Page,
  MainPanel,
  SidePanel,
  Memo,
  Memo2,
  ColSpace,
  Body,
} from "../components/styled/Custom";
import Card from "../components/idols/collection/Card";
import Footer from "../components/Footer";
import Height from "../components/format/Height";

interface Props {}

const Idols: React.FC<Props> = () => {
  return (
    <Page>
      <NavBar />
      <Body>
        <MainPanel>
          <Top>
            <div className="left">
              <h1>Collection</h1>
            </div>
            <Link to="/archive">
              <Memo>6 / 320</Memo>
            </Link>
          </Top>
          <Cards>
            <Card image={`/images/yeji.jpeg`} name="Ryujin" league={4}></Card>
            <Card image={`/images/yeji.jpeg`} name="Irene" league={5}></Card>
            <Card image={`/images/yeji.jpeg`} name="Yeeun" league={4}></Card>
            <Card image={`/images/yeji.jpeg`} name="JiU" league={4}></Card>
            <Card image={`/images/yeji.jpeg`} name="Taeyeun" league={5}></Card>
            <Card image={`/images/yeji.jpeg`} name="Yeji" league={5}></Card>
          </Cards>
        </MainPanel>
        <SidePanel>
          <Section>
            <div className="column">
              <h2>Yeji</h2>
              <Memo2>
                <Apart>
                  <span>Skill</span>
                  <span>126</span>
                </Apart>
                <Apart>
                  <span>Energy</span>
                  <span>1575</span>
                </Apart>
                <Apart>
                  <span>Rap</span>
                  <span>220</span>
                </Apart>
                <Apart>
                  <span>Dance</span>
                  <span>189</span>
                </Apart>
                <Apart>
                  <span>Sing</span>
                  <span>157</span>
                </Apart>
              </Memo2>
            </div>
            <div className="column">
              <div className="pic">
                <img src="/images/yeji.jpeg" />
              </div>
              <h3>Lvl 16</h3>
            </div>
          </Section>
          <p>Main Rapper. Lead Dancer. Sub-Vocalist. Center.</p>
          <ColSpace>
            <Section>
              <Memo>Train</Memo>
              <Memo>Gear</Memo>
            </Section>
            <Section>
              <Memo>Team</Memo>
              <Memo>Trade</Memo>
            </Section>
          </ColSpace>
          <Height height={16} />
          <Apart className="bottom">
            <Memo2>League 4</Memo2>
            <h3>Itzy</h3>
          </Apart>
        </SidePanel>
      </Body>
      <Footer />
    </Page>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  .left {
    width: 400px;
    margin-right: 32px;
    flex: 1;
    padding-bottom: 4px;
    border-bottom: 4px solid #2c3e50;
  }
`;

const Cards = styled.a`
  display: flex;
  gap: 28px 20px;
  padding: 24px 0 16px;
  flex-wrap: wrap;
`;

// todo turn .pic into memo

const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    .pic {
      display: flex;
      padding: 8px;
      border-radius: 4px;
      background-color: #90a0d9;
      img {
        max-width: 100%;
      }
    }
  }
`;

const Apart = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Idols;
