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
            가장 원하는{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              한가지
            </span>
            를 선택해주세요
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
                        const randomString = [
                          "저도 좋아요",
                          "매력 만점~",
                          "힙하다 힙해",
                          "존예!",
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
                          justifyContent: "flex-start",
                          alignItems: "center",
                          overflow: "hidden",
                          width: "100%",
                          height: "100px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          sizes="100%"
                          priority
                          blurDataURL="data:image/jpeg;base64,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"
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.name}
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
                          "존잘!",
                          "본눈살게요.",
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
                          justifyContent: "flex-start",
                          alignItems: "center",
                          overflow: "hidden",
                          width: "100%",
                          height: "100px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          sizes="100%"
                          priority
                          blurDataURL="data:image/jpeg;base64,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"
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.name}
                      </div>
                    </Selection>
                  );
                })}
          </Grid>
        </WidthHeightBlock>
      </Container>
    );
  },
);

LookLike.displayName = "LookLike";

export default LookLike;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 56px 0 0 0;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  height: 128px;
  border-radius: 4px;
  border: ${(props) =>
    props.selected ? "solid 4px #242729" : "solid 1px #d2d5d6"};
  font-family: Pretendard Variable;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#242729")};
  overflow: hidden;
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
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.gap || 16}px;
  padding: 40px 0 14px 0;
  overflow: auto;
  height: calc(100vh - 378px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
