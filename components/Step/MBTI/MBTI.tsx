import { BottomButton } from "@/components/Button";
import Typography from "@/components/Typography";
import { MBTI_ITEMS } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { toast } from "react-toastify";

const MBTI = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">좋아하는 스타일은?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {MBTI_ITEMS.map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
                    setFlowContext((prev) => {
                      return {
                        ...prev,
                        context: { ...prev.context, mbti: item.type },
                      };
                    });
                  }}
                  selected={
                    flowContext.context &&
                    flowContext.context.mbti === item.type
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>{item.description}</div>
                    <div>{item.detail}</div>
                  </div>
                  <Divider />
                  <div>{item.type}</div>
                </Selection>
              );
            })}
          </Grid>
        </WidthHeightBlock>
        <WidthBlock>
          <BottomButton
            onClick={() => {
              // MBTI를 선택하지 않았을 때
              if (!flowContext.context.mbti) {
                toast.warn("🦄 MBTI을 선택해주세요!");
                return;
              }

              setFlowContext((prev) => {
                return { ...prev, step: "lookLike", direction: "next" };
              });
            }}
            label="다음"
          />
        </WidthBlock>
      </Container>
    );
  },
);

MBTI.displayName = "MBTI";

export default MBTI;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
  font-size: 12px;
  width: 100%;
  height: 123px;
  padding: 16px 13px 10px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#242729")};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d2d5d6;
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
