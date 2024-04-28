import { HOBBY } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const Hobby = ({ setFlowContext, flowContext }: CommonStepType) => {
  return (
    <Container>
      <div>
        <Button
          onClick={() => {
            setFlowContext((prev) => {
              return { ...prev, step: "interest" };
            });
          }}
        >
          이전
        </Button>
      </div>
      <Grid>
        {Object.keys(HOBBY).map((category, index1) => (
          <div key={index1}>
            <Category>{category}</Category>
            <div>
              {HOBBY[category].map((item, index2) => {
                return (
                  <Selection
                    key={index2}
                    onClick={() => {
                      setFlowContext((prev) => {
                        return {
                          ...prev,
                          context: { ...prev.context, hobby: item },
                        };
                      });
                    }}
                    selected={
                      flowContext.context && flowContext.context.hobby === item
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
            return;
          }}
        >
          내 이상형 확인하기
        </Button>
      </div>
    </Container>
  );
};

Hobby.displayName = "Hobby";

export default Hobby;

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
  grid-template-columns: repeat(3, 1fr);
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
