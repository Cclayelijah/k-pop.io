import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/header/NavBar";
import styled from "styled-components";
import { SidePanel, MainPanel, Page } from "../components/styled/Custom";
import ControlWidget from "../components/compete/ControlWidget";
import Party from "../components/compete/Party";
import HR from "../components/format/HR";

function Compete() {
  return (
    <Page>
      <NavBar title={"Compete"} />
      <Container>
        <MainPanel>
          <Main>
            <ControlWidget />
            <Party />
            <HR />
          </Main>
        </MainPanel>
        <SidePanel></SidePanel>
      </Container>
      <Footer />
    </Page>
  );
}

const Container = styled.div`
  margin: 24px 24px 0;
  display: flex;
  min-height: 200px;
  max-height: 80vh;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Compete;
