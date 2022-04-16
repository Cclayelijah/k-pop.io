import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/header/NavBar";
import styled from "styled-components";
import {
  SidePanel,
  MainPanel,
  Page,
  Body,
  ColSpace,
} from "../components/styled/Custom";
import ControlWidget from "../components/compete/ControlWidget";
import Party from "../components/compete/parties/Party";
import HR from "../components/format/HR";
import Parties from "../components/compete/parties/Parties";
import Info from "../components/compete/PartyInfo";
import Friends from "../components/panel/friends/Friends";
import IdolDetails from "../components/panel/idol/IdolDetails";
import Chat from "../components/panel/chat/Chat";

interface Props {}

const Compete: React.FC<Props> = () => {
  const [previewIdol, setPreviewIdol] = useState(false);
  const [chatTo, setChatTo] = useState("");
  const [showChat, setShowChat] = useState(false);

  const openChat = (username: string) => {
    setPreviewIdol(false);
    setChatTo(username);
    setShowChat(true);
    console.log("chat clicked");
  };

  const handleIdol = (idol: number) => {
    setShowChat(false);
    setPreviewIdol(true);
    console.log("idol clicked");
  };

  return (
    <Page>
      <NavBar title={"Compete"} />
      <Body>
        <MainPanel>
          <Main>
            <ControlWidget />
            <Party handleIdol={handleIdol} />
            <HR />
            <Parties viewing={1} />
            <ColSpace></ColSpace>
            <Info />
          </Main>
        </MainPanel>
        <SidePanel>
          <Friends openChat={openChat} />
          <HR2></HR2>
          {previewIdol && (
            <IdolDetails
              name={"Ryujin"}
              group={"Itzy"}
              league={4}
              level={24}
              stats={{
                skill: 126,
                energy: 1575,
                rap: 220,
                dance: 189,
                sing: 157,
              }}
              position={{
                main: ["Rapper"],
                lead: ["Dancer"],
                sub: ["Vocalist"],
                special: ["Center"],
              }}
            />
          )}
          {showChat && <Chat username={chatTo} />}
        </SidePanel>
      </Body>
      <Footer />
    </Page>
  );
};

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  color: #bb8fce;
`;

const HR2 = styled.div`
  display: flex;
  margin: 0px 0 8px;
  height: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

export default Compete;
