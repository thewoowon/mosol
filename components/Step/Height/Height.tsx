import Typography from "@/components/Typography";
import { HEIGHT_RANGE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const Height = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">선호하는 키는?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          {flowContext.context.sex === "남자"
            ? HEIGHT_RANGE["FEMALE"].map((item, index) => {
                return (
                  <Selection
                    key={index}
                    onClick={() => {
                      setFlowContext((prev) => {
                        return {
                          ...prev,
                          context: { ...prev.context, height: item },
                        };
                      });
                    }}
                    selected={
                      flowContext.context && flowContext.context.height === item
                    }
                  >
                    <div>{item}</div>
                  </Selection>
                );
              })
            : HEIGHT_RANGE["MALE"].map((item, index) => {
                return (
                  <Selection
                    key={index}
                    onClick={() => {
                      setFlowContext((prev) => {
                        return {
                          ...prev,
                          context: { ...prev.context, height: item },
                        };
                      });
                    }}
                    selected={
                      flowContext.context && flowContext.context.height === item
                    }
                  >
                    <div>{item}</div>
                  </Selection>
                );
              })}
        </WidthHeightBlock>
      </Container>
    );
  },
);

Height.displayName = "Height";

export default Height;

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
  display: flex;
  flexdirection: column;
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  height: 54px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => (props.selected ? "white" : "#a1a9ad")};
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.gap || 12}px;
  overflow: auto;
  height: calc(100vh - 378px);
  padding: 40px 0 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
