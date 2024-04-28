import { FACE_SHAPE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const FaceShape = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "eyeShape", direction: "prev" };
              });
            }}
          >
            이전
          </Button>
        </div>
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
                  flowContext.context && flowContext.context.faceShape === item
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
                return { ...prev, step: "fashion", direction: "next" };
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

FaceShape.displayName = "FaceShape";

export default FaceShape;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
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
