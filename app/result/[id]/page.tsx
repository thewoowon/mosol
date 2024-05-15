"use client";

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Image from "next/image";
import Typography from "@/components/Typography";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/lib/axios";
import { useEffect } from "react";
import { useRankStore } from "@/stores/global";

interface ResultPageProps {
  params: {
    id: number;
  };
}

const ResultPage = ({ params: { id } }: ResultPageProps) => {
  const router = useRouter();
  const { setResultId } = useRankStore();

  const { data: resultData, isLoading } = useQuery({
    queryKey: ["result", id],
    queryFn: () => {
      return customAxios({
        method: "GET",
        url: `/result/getResult/${id}`,
      }).then((res) => res.data);
    },
  });

  const shareContent = async () => {
    const shareData = {
      title: "못해솔로 - 최종 결과",
      text: "나의 이상형은?",
      url: `${window.location.origin}/result/${id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyToClipboard(shareData.url);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("🦄 클립보드에 복사되었습니다!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Idol>
        <div>
          <svg
            width="54"
            height="14"
            viewBox="0 0 54 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="7" width="54" height="7" rx="3.5" fill="#242729" />
            <path
              d="M18 5C18 2.23858 20.2386 0 23 0H31C33.7614 0 36 2.23858 36 5V7H18V5Z"
              fill="#242729"
            />
          </svg>
        </div>
        <Typography type="h4">나의 이상형은?</Typography>
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            maxWidth: "250px",
            maxHeight: "250px",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            src={`https://devapi.tikitaka.chat/result/image/${id}`}
            alt="나의 이상형"
            fill
            sizes="100%"
            priority
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          />
        </div>
        <Ol>
          <Li>
            <LeftSide>성격</LeftSide>
            <RightSide>{resultData.data.mbti}</RightSide>
          </Li>
          <Li>
            <LeftSide>외모</LeftSide>
            <RightSide>{resultData.data.lookLike}</RightSide>
          </Li>
          <Li>
            <LeftSide>키</LeftSide>
            <RightSide>{resultData.data.height}</RightSide>
          </Li>
          <Li>
            <LeftSide>눈매</LeftSide>
            <RightSide>{resultData.data.eyeShape}</RightSide>
          </Li>
          <Li>
            <LeftSide>얼굴상</LeftSide>
            <RightSide>{resultData.data.faceShape}</RightSide>
          </Li>
          <Li>
            <LeftSide>패션</LeftSide>
            <RightSide>{resultData.data.fashion}</RightSide>
          </Li>
          <Li>
            <LeftSide>활동</LeftSide>
            <RightSide>{resultData.data.hobby}</RightSide>
          </Li>
        </Ol>
      </Idol>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          gap: "8px",
          marginTop: "24px",
        }}
      >
        <Button
          skeleton={true}
          onClick={() => {
            router.push("/flow");
          }}
        >
          나도 해보기
        </Button>
        <Button onClick={shareContent}>공유하기</Button>
      </div>
      <div
        style={{
          cursor: "pointer",
          color: "#ffffff",
          textDecoration: "underline",
        }}
        onClick={() => {
          setResultId(id);
          router.push("/rank");
        }}
      >
        이상형 랭킹 보기
      </div>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #242729;
  padding: 56px 0;
`;

const Idol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 298px;
  max-height: 536px;
  height: 100%;
  flex-grow: 0;
  padding: 12px 24px 16px 24px;
  border-radius: 20px;
  background-color: #f4f7fc;
  gap: 12px;
`;

const Button = styled.button<{
  skeleton?: boolean;
}>`
  width: 100%;
  height: 54px;
  border-radius: 4px;
  background-color: #fa6ee3;
  background-color: ${(props) => (props.skeleton ? "white" : "#fa6ee3")};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  letter-spacing: normal;
  text-wrap: nowrap;

  ${(props) =>
    props.skeleton &&
    `
    border: solid 1px #fa6ee3;
    color: #fa6ee3;
  `}
`;

const Ol = styled.ol`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  width: 100%;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
`;

const LeftSide = styled.div`
  width: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  color: black;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: black;
`;
