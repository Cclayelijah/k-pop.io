import React from "react";
import styled from "styled-components";
import { BluePic, BlueRank } from "../../styled/Custom";

interface Props {
  openChat: (username: string) => void;
  username: string;
  online: boolean;
  rank: number;
  profilePic?: string;
}

const Friend: React.FC<Props> = ({
  openChat,
  username,
  online,
  rank,
  profilePic,
}) => {
  return (
    <Container>
      <BluePic id="propic">{profilePic && <img src="" alt="" />}</BluePic>
      {online && <OnlineStatus className="online"></OnlineStatus>}
      {!online && <OnlineStatus className="offline"></OnlineStatus>}
      <h4 className="username">Tasty</h4>
      <Actions>
        {online && <img src="/images/play.png" />}
        {online && (
          <div className="link" onClick={() => openChat(username)}>
            <img src="/images/chat.png" />
          </div>
        )}
      </Actions>
      <BlueRank>
        <h4>32</h4>
      </BlueRank>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
  align-items: center;
  .username {
    color: #90a0d9;
  }
  .offline {
    background-color: #566573;
  }
  .online {
    background-color: #72ce97;
  }
  @media only screen and (max-width: 680px) {
    #propic {
      display: none;
    }
  }
`;

const OnlineStatus = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 2;
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  img {
    height: 30px;
  }
`;

export default Friend;
