import Typography from "@/components/Typography";
import { useModalStore, useRankStore } from "@/stores/global";
import { CommonStepType, Step } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Result = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    const { toggleModal } = useModalStore();
    const { setResultId } = useRankStore();
    const router = useRouter();
    const { t } = useTranslation();

    const shareContent = async () => {
      const shareData: ShareData = {
        title: "못해솔로 - 최종 결과",
        text: "나의 이상형은?",
        url: `${window.location.origin}/result/${flowContext.context.result.id}`,
      };

      // 모바일 브라우저의 커버리지는 85% 정도,
      // 나머지 15%는 클립보드로 복사하는 방식으로 대응
      // TODO: 지원하지 않는 브라우저에 대한 fallback 처리
      // 지원하지 않는 브라우저 -> Android webview, Firefox for Android

      // navigator.share API를 지원하는 브라우저인지 확인
      // 현재 브라우저 정보를 확인하는 방법은?
      // https://developer.mozilla.org/en-US/docs/Web/API/Navigator

      // 현재 브라우저가 Android webview 또는 Firefox for Android인 경우
      if (
        navigator.userAgent.includes("wv") &&
        navigator.userAgent.includes("Android")
      ) {
        copyToClipboard(shareData.url || "");
        return;
      }

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        copyToClipboard(shareData.url || "");
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
          <Typography type="h5">{t("what_is_my_ideal_type")}</Typography>
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
              src={flowContext.context.result.picture}
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
              <RightSide>{flowContext.context.mbti}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("look_like")}</LeftSide>
              <RightSide>{flowContext.context.lookLike}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("height")}</LeftSide>
              <RightSide>{flowContext.context.height}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("eye")}</LeftSide>
              <RightSide>{flowContext.context.eyeShape}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("face_shape")}</LeftSide>
              <RightSide>{flowContext.context.faceShape}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("fashion")}</LeftSide>
              <RightSide>{flowContext.context.fashion}</RightSide>
            </Li>
            <Li>
              <LeftSide>{t("interest")}</LeftSide>
              <RightSide>{flowContext.context.interest.join(", ")}</RightSide>
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
              toggleModal({
                isOpen: true,
                title: t("end_service"),
                description: t("warning_message"),
                onConfirm: () => {
                  router.push("/");
                },
              });
            }}
          >
            {t("redo")}
          </Button>
          <Button onClick={shareContent}>{t("lets_share")}</Button>
        </div>
        <div
          style={{
            cursor: "pointer",
            color: "#ffffff",
            textDecoration: "underline",
          }}
          onClick={() => {
            setResultId(flowContext.context.result.id);
            router.push("/rank");
          }}
        >
          {t("go_to_ranking")}
        </div>
      </Container>
    );
  },
);

Result.displayName = "Result";

export default Result;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #242729;
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
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fa6ee3;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f4f7fc;
    border-radius: 8px;
  }
  scrollbar-width: thin;
  -ms-overflow-style: auto;
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
