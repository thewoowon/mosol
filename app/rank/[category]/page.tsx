"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { DetailDashboard } from "@/components/Dashboard";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/lib/axios";
import Loader from "@/components/Loader";
import { ResultDataType } from "@/types";
import { useRankStore } from "@/stores/global";

type RankDetailPageProps = {
  params: {
    category: string;
  };
};

const categoryMap: {
  [key: string]: string;
} = {
  mbti: "성격",
  lookLike: "외모",
  height: "키",
  eyeShape: "눈 모양",
  faceShape: "얼굴상",
  fashion: "패션",
  interest: "활동",
};

const RankDetailPage = ({ params: { category } }: RankDetailPageProps) => {
  const router = useRouter();
  const { sex } = useRankStore();

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

  const { data: rankResultData, isLoading } = useQuery({
    queryKey: ["rank", sex],
    queryFn: () => {
      return customAxios({
        method: "GET",
        url: `/result/getResultStatRank/${sex}`,
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
        <div>{`${categoryMap[category]} 랭킹`}</div>
      </Navigation>
      <DashboardContainer>
        <DetailDashboard data={resultData} category={category} sex={sex} />
      </DashboardContainer>
      {isLoading && <Loader />}
    </Container>
  );
};

export default RankDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 56px;
  width: 100%;
  background-color: white;
  position: relative;
  color: #000000;
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

const DashboardContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  align-items: flex-start;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  padding: 30px 0;
`;
