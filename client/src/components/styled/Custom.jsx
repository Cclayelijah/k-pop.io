import styled from "styled-components";

export const Header = styled.div`
  background-color: #2c3e50;
  color: #bb8fce;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  .title {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  h1 {
    margin: 0;
    display: inline;
  }
  nav {
    display: flex;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainPanel = styled.div`
  background-color: #566573;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px 0 0 16px;
`;

export const SidePanel = styled.a`
  background-color: #2c3e50;
  display: flex;
  gap: 16px;
  flex-direction: column;
  min-width: 250px;
  width: 30%;
  padding: 24px;
  border-radius: 0 16px 16px 0;
  color: #90a0d9;
`;

export const Memo = styled.div`
  display: inline-block;
  background-color: #bb8fce;
  border-radius: 8px;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
  padding: 12px 16px;
  height: fit-content;
  font-size: 1.5em;
  text-align: center;
  color: #2c3e50;
  font-family: "Keania One", cursive;
  font-weight: 600;
  min-width: 70px;
`;

export const Memo2 = styled.div`
  display: inline-block;
  background-color: #90a0d9;
  padding: 8px;
  height: fit-content;
  font-size: 1.2em;
  color: #2c3e50;
  font-family: "Keania One", cursive;
  font-weight: 600;
`;

export const ColSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  flex: 1;
`;
