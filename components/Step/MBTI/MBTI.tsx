import { MBTI_ITEMS } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const MBTI = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "sex", direction: "prev" };
              });
            }}
          >
            이전
          </Button>
        </div>
        <div>
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
                  <div>{item.description}</div>
                  <div>{item.detail}</div>
                  <div>{item.type}</div>
                </Selection>
              );
            })}
          </Grid>
        </div>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "lookLike", direction: "next" };
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

MBTI.displayName = "MBTI";

export default MBTI;

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
  grid-template-columns: repeat(4, 1fr);
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
