import React from "react";
import styled from "styled-components";
import { PartySmall, SmallPic } from "../../styled/Custom";

interface Props {
  runnerUp: number;
  inQueue: number;
}

const PrevParties: React.FC<Props> = ({ runnerUp, inQueue }) => {
  return (
    <Container>
      <PartySmall>
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
        <div className="number">
          <h4>5</h4>
        </div>
      </PartySmall>
      <PartySmall>
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
        <div className="number">
          <h4>4</h4>
        </div>
      </PartySmall>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (max-width: 680px) {
    flex-direction: column-reverse;
    * {
      flex-direction: row-reverse;
    }
  }
`;

export default PrevParties;
