import Typography from "@/components/Typography";
import { EYES_TYPE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const EyeShape = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <div>
          <Typography type="h3">선호하는 눈매는?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </div>
        <Grid>
          {EYES_TYPE.map((item, index) => {
            return (
              <Selection
                key={index}
                onClick={() => {
                  setFlowContext((prev) => {
                    return {
                      ...prev,
                      context: { ...prev.context, eyeShape: item },
                    };
                  });
                }}
                selected={
                  flowContext.context && flowContext.context.eyeShape === item
                }
              >
                <div>{item}</div>
              </Selection>
            );
          })}
        </Grid>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "faceShape", direction: "next" };
              });
            }}
          >
            다음
          </Button>
        </div>
      </Container>
    );
  },
);

EyeShape.displayName = "EyeShape";

export default EyeShape;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  overflow-y: auto;
  min-height: 400px;
  max-height: 400px;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#ff6b6b" : "white")};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
