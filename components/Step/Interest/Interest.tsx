import { INTEREST } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const Interest = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "fashion", direction: "prev" };
              });
            }}
          >
            이전
          </Button>
        </div>
        <Grid>
          {Object.keys(INTEREST).map((category, index1) => (
            <div key={index1}>
              <Category>{category}</Category>
              <div>
                {INTEREST[category].map((item, index2) => {
                  return (
                    <Selection
                      key={index2}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, interest: item },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.interest === item
                      }
                    >
                      <div>{item}</div>
                    </Selection>
                  );
                })}
              </div>
            </div>
          ))}
        </Grid>
        <div>
          <Button
            onClick={() => {
              setFlowContext((prev) => {
                return { ...prev, step: "hobby", direction: "next" };
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

Interest.displayName = "Interest";

export default Interest;

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
  padding: 20px;
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

const Category = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
