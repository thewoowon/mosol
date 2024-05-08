import Typography from "@/components/Typography";
import { LOOK_LIKE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const LookLike = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">좋아하는 외모는?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {flowContext.context.sex === "남자"
              ? LOOK_LIKE["MALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, lookLike: item.name },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.lookLike === item.name
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          width: "104px",
                          height: "104px",
                          borderRadius: "50%",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={104}
                          height={104}
                        />
                      </div>
                    </Selection>
                  );
                })
              : LOOK_LIKE["FEMALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        const randomString = [
                          "저도 좋아요",
                          "매력 만점~",
                          "힙하다 힙해",
                          "홀리댐!",
                        ];
                        toast.success(
                          `👍 ${item.name}! ${
                            randomString[
                              Math.floor(Math.random() * randomString.length)
                            ]
                          }`,
                        );
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, lookLike: item.name },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.lookLike === item.name
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          width: "104px",
                          height: "104px",
                          borderRadius: "50%",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={104}
                          height={104}
                        />
                      </div>
                    </Selection>
                  );
                })}
          </Grid>
        </WidthHeightBlock>
        <div
          style={{
            display: "none",
          }}
        >
          {/* 모달 */}
          <div>
            <Typography type="body1">좋아하는 인물 입력</Typography>
          </div>
          <Typography type="body1">이상형의 이름을 입력해주세요.</Typography>
        </div>
      </Container>
    );
  },
);

LookLike.displayName = "LookLike";

export default LookLike;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Selection = styled.div<{ selected: boolean }>`
  border-radius: 50%;
  cursor: pointer;
  width: 100%;
  height: 104px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${(props) =>
    props.selected &&
    `
    &::after {
      content: "🩷";
      position: absolute;
      font-size: 36px;
      animation: bounce 0.5s infinite;

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }
    }
  `}
`;

const WidthBlock = styled.div<{
  gap?: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.gap || 16}px;
`;

const WidthHeightBlock = styled.div<{
  gap?: number;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.gap || 16}px;
  overflow-y: auto;
  padding: 40px 0 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
