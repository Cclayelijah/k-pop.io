import React from "react";
import styled from "styled-components";
import { PartySmall, SmallPic } from "../../styled/Custom";

interface Props {
  runnerUp: number;
  inQueue: number;
}

const NextParties: React.FC<Props> = ({ runnerUp, inQueue }) => {
  return (
    <Container>
      <PartySmall>
        <div className="number">
          <h4>2</h4>
        </div>
        <div className="party">
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
        </div>
      </PartySmall>
      <PartySmall>
        <div className="number">
          <h4>3</h4>
        </div>
        <div className="party">
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
          <SmallPic>
            <img src="/images/yeji.jpeg" alt="" />
          </SmallPic>
        </div>
      </PartySmall>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default NextParties;
