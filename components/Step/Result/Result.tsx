import Typography from "@/components/Typography";
import { useModalStore } from "@/stores/global";
import { CommonStepType, Step } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Result = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    const { toggleModal } = useModalStore();
    const router = useRouter();
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
            }}
          >
            <Image
              src={flowContext.context.result.picture}
              alt="나의 이상형"
              width={250}
              height={250}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
          <Ol>
            <Li>
              <LeftSide>성격</LeftSide>
              <RightSide>{flowContext.context.mbti}</RightSide>
            </Li>
            <Li>
              <LeftSide>키</LeftSide>
              <RightSide>{flowContext.context.height}</RightSide>
            </Li>
            <Li>
              <LeftSide>눈매</LeftSide>
              <RightSide>{flowContext.context.eyeShape}</RightSide>
            </Li>
            <Li>
              <LeftSide>얼굴상</LeftSide>
              <RightSide>{flowContext.context.faceShape}</RightSide>
            </Li>
            <Li>
              <LeftSide>패션</LeftSide>
              <RightSide>{flowContext.context.fashion}</RightSide>
            </Li>
            <Li>
              <LeftSide>활동</LeftSide>
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
                title: "이상형 생성을 다시 하시겠어요? 😚",
                description: "입력한 정보가 모두 사라집니다.",
                onConfirm: () => {
                  setFlowContext((prev) => {
                    return {
                      ...prev,
                      context: {
                        sex: "",
                        age: "",
                        mbti: "",
                        lookLike: "",
                        height: "",
                        eyeShape: "",
                        faceShape: "",
                        fashion: "",
                        interest: [],
                        hobby: [],
                        result: {
                          id: 0,
                          picture: "",
                        },
                      },
                      step: "sexAndAge" as Step,
                      direction: "prev",
                    };
                  });
                },
              });
            }}
          >
            다시하기
          </Button>
          <Button
            onClick={() => {
              toast.info("🦄 준비중인 기능입니다!");
            }}
          >
            내 이상형 공유하기
          </Button>
        </div>
        <div
          style={{
            cursor: "pointer",
            color: "#ffffff",
            textDecoration: "underline",
          }}
          onClick={() => {
            router.push("/rank");
          }}
        >
          이상형 랭킹 보기
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
  padding: 56px 0 0 0;
  background-color: #242729;
`;

const Idol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 298px;
  height: 536px;
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
