import React from "react";
import styled from "styled-components";
import Friend from "./Friend";

interface Props {
  openChat: (username: string) => void;
}

const Friends: React.FC<Props> = ({ openChat }) => {
  return (
    <Container>
      <h3>Friends</h3>
      <Friend
        openChat={(username: string) => openChat(username)}
        username="Tasty"
        online={true}
        rank={32}
        profilePic={undefined}
      />
      <Friend openChat={openChat} username="Bob" online={false} rank={32} />
      <Friend openChat={openChat} username="Stayc" online={false} rank={32} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  h3 {
    margin: 0 0 12px;
  }
`;

export default Friends;
