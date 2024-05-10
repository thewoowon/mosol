"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tabs";
import Dashboard from "@/components/Dashboard";

const RankPage = () => {
  const [sexType, setSexType] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container>
      <Navigation>
        <BackArrow onClick={handleBack}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L1 8L8 1"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackArrow>
        <div>이상형 랭킹</div>
      </Navigation>
      <Tabs>
        <Tab label="여자 이상형">
          <Dashboard type={"female"} />
        </Tab>
        <Tab label="남자 이상형">
          <Dashboard type={"male"} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default RankPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 56px;
  padding-bottom: 56px;
  width: 100%;
  background-color: white;
  position: relative;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #e1e1e5;
`;

const BackArrow = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 16px;
`;
