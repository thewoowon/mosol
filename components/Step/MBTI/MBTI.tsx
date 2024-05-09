import Typography from "@/components/Typography";
import { MBTI_ITEMS } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const MBTI = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">좋아하는 성격은?</Typography>
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
      </Container>
    );
  },
);

MBTI.displayName = "MBTI";

export default MBTI;

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

  width: 100%;
  height: 100%;
  max-height: 123px;
  padding: 16px 13px 10px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
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
