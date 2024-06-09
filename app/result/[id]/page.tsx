"use client";

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Image from "next/image";
import Typography from "@/components/Typography";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/lib/axios";
import { useLoaderStore, useRankStore } from "@/stores/global";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import { useTranslation } from "react-i18next";
import { KEYWORD_WIKI } from "@/contants/flow";

interface ResultPageProps {
  params: {
    id: number;
  };
}

const ResultPage = ({ params: { id } }: ResultPageProps) => {
  const router = useRouter();
  const { setResultId } = useRankStore();
  const { offLoader } = useLoaderStore();
  const { t, i18n } = useTranslation();

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
    const shareData: ShareData = {
      title: "못해솔로 - 최종 결과",
      text: "나의 이상형은?",
      url: `${window.location.origin}/result/${id}`,
    };

    // 모바일 브라우저의 커버리지는 85% 정도,
    // 나머지 15%는 클립보드로 복사하는 방식으로 대응
    // TODO: 지원하지 않는 브라우저에 대한 fallback 처리
    // 지원하지 않는 브라우저 -> Android webview, Firefox for Android

    // navigator.share API를 지원하는 브라우저인지 확인
    // 현재 브라우저 정보를 확인하는 방법은?
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator

    // 현재 브라우저가 Android webview 또는 Firefox for Android인 경우
    const isAndroidWebView = () => {
      const ua = navigator.userAgent.toLowerCase();
      return ua.includes("wv") && ua.includes("android");
    };

    if (isAndroidWebView()) {
      await copyToClipboard(shareData.url || "");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
        toast.error(`❌ ${t("share_error")}`);
      }
    } else {
      await copyToClipboard(shareData.url || "");
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`🦄 ${t("clipboard_complete")}`);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error(`❌ ${t("clipboard_error")}`);
    }
  };

  useEffect(() => {
    offLoader();
    return () => {
      offLoader();
    };
  }, [offLoader]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <ScrollWrapper>
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
          <Typography type="h4">{t("what_is_my_ideal_type")}</Typography>
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              minWidth: "250px",
              minHeight: "250px",
              width: "250px",
              height: "250px",
              position: "relative",
            }}
          >
            <Image
              src={`https://stonslabdata.com/result/image/${id}`}
              alt="나의 이상형"
              fill
              sizes="100%"
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
          <Ol>
            <Li>
              <LeftSide>{t("character")}</LeftSide>
              <RightSide>{resultData.data.mbti}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("look_like")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? KEYWORD_WIKI[resultData.data.lookLike]
                  : resultData.data.lookLike}
              </RightSide>
            </Li>
            <Li>
              <LeftSide>{t("height")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? KEYWORD_WIKI[resultData.data.height]
                  : resultData.data.height}
              </RightSide>
            </Li>
            <Li>
              <LeftSide>{t("eye")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? KEYWORD_WIKI[resultData.data.eyeShape]
                  : resultData.data.eyeShape}
              </RightSide>
            </Li>
            <Li>
              <LeftSide>{t("face_shape")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? KEYWORD_WIKI[resultData.data.faceShape]
                  : resultData.data.faceShape}
              </RightSide>
            </Li>
            <Li>
              <LeftSide>{t("fashion")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? KEYWORD_WIKI[resultData.data.fashion]
                  : resultData.data.fashion}
              </RightSide>
            </Li>
            <Li>
              <LeftSide>{t("interest")}</LeftSide>
              <RightSide>
                {i18n.language !== "ko"
                  ? resultData.data.hobby
                      .split(",")
                      .map((hobby: string, index: number) => {
                        // 마지막 쉼표 제거
                        if (
                          index ===
                          resultData.data.hobby.split(",").length - 1
                        ) {
                          return KEYWORD_WIKI[hobby.trim()];
                        } else {
                          return KEYWORD_WIKI[hobby.trim()] + ", ";
                        }
                      })
                  : resultData.data.hobby}
              </RightSide>
            </Li>
          </Ol>
        </Idol>
      </ScrollWrapper>
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
            router.push("/");
          }}
        >
          {t("redo")}
        </Button>
        <Button id="share-content" onClick={shareContent}>
          {t("lets_share")}
        </Button>
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
        {t("go_to_ranking")}
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
  height: fit-content;
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
  width: 100%;
  max-width: 50px;
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

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow-y: auto;
  padding: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;
