import Typography from "@/components/Typography";
import { FACE_SHAPE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const FaceShape = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">선호하는 얼굴상은?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {FACE_SHAPE.map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
                    setFlowContext((prev) => {
                      return {
                        ...prev,
                        context: { ...prev.context, faceShape: item },
                      };
                    });
                  }}
                  selected={
                    flowContext.context &&
                    flowContext.context.faceShape === item
                  }
                >
                  <div
                    style={{
                      width: "55px",
                      height: "53px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      overflow: "hidden",
                    }}
                  ></div>
                  <div>{item}</div>
                </Selection>
              );
            })}
          </Grid>
        </WidthHeightBlock>
      </Container>
    );
  },
);

FaceShape.displayName = "FaceShape";

export default FaceShape;

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
  height: auto;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  height: 104px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#242729")};
  gap: 12px;
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
