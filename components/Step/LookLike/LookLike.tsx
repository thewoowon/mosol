import { LOOK_LIKE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const LookLike = ({ setFlowContext, flowContext }: CommonStepType) => {
  return (
    <Container>
      <div>
        <Button
          onClick={() => {
            setFlowContext((prev) => {
              return { ...prev, step: "mbti" };
            });
          }}
        >
          이전
        </Button>
      </div>
      <Grid>
        {flowContext.context.sex === "남자"
          ? LOOK_LIKE["MALE"].map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
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
                  <div>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>{item.name}</div>
                  <div> {item.description}</div>
                </Selection>
              );
            })
          : LOOK_LIKE["FEMALE"].map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
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
                  <div>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>{item.name}</div>
                  <div> {item.description}</div>
                </Selection>
              );
            })}
      </Grid>
      <div>
        <Button
          onClick={() => {
            setFlowContext((prev) => {
              return { ...prev, step: "height" };
            });
          }}
        >
          다음
        </Button>
      </div>
    </Container>
  );
};

LookLike.displayName = "LookLike";

export default LookLike;

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
