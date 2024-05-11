"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tabs";
import Dashboard from "@/components/Dashboard";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/lib/axios";
import Loader from "@/components/Loader";
import { ResultDataType } from "@/types";
import { useRankStore } from "@/stores/global";

const sexArray = ["female", "male"];

enum secType {
  female = "female",
  male = "male",
}

const RankPage = () => {
  // 여자: false, 남자: true
  const [sexType, setSexType] = useState<"female" | "male">("female");
  const router = useRouter();
  const { setSex } = useRankStore();

  const [resultData, setResultData] = useState<ResultDataType>({
    eyeshapeStatRankData: [],
    faceshapeStatRankData: [],
    fashionStatRankData: [],
    heightStatRankData: [],
    hobbyStatRankData: [],
    looklikeStatRankData: [],
    mbtiStatRankData: [],
  });

  const handleBack = () => {
    router.back();
  };

  // /result/getResultStatRank/{sex}

  const { data: rankResultData, isLoading } = useQuery({
    queryKey: ["rank", sexType],
    queryFn: () => {
      return customAxios({
        method: "GET",
        url: `/result/getResultStatRank/${sexType}`,
      }).then((res) => res.data);
    },
  });

  useEffect(() => {
    if (rankResultData) {
      setResultData(rankResultData.data);
    }
  }, [rankResultData]);

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
      <Tabs
        onChange={(index) => {
          setSexType(sexArray[index] as secType);
          setSex(sexArray[index] as secType);
        }}
      >
        <Tab label="여자 이상형">
          <Dashboard data={resultData} sex={sexType} />
        </Tab>
        <Tab label="남자 이상형">
          <Dashboard data={resultData} sex={sexType} />
        </Tab>
      </Tabs>
      {isLoading && <Loader />}
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
