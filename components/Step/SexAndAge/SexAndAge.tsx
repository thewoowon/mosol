import RadioButton from "@/components/RadioButton";
import Typography from "@/components/Typography";
import { AGE_RANGE, SEX_ITEMS } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";

const SexAndAge = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">성별과 나이를 알려주세요.</Typography>
          <Typography type="subtitle1">
            이상형 결과를 위해 활용됩니다
          </Typography>
        </WidthBlock>
        <WidthHeightBlock gap={84}>
          <WidthBlock>
            <Typography type="h5">성별</Typography>
            <RadioButton
              list={SEX_ITEMS.map((item, index) => {
                return {
                  label: item[0],
                  value: item,
                };
              })}
              onChange={(value) => {
                setFlowContext((prev) => {
                  return {
                    ...prev,
                    context: { ...prev.context, sex: value },
                  };
                });
              }}
              value={flowContext.context && flowContext.context.sex}
            />
          </WidthBlock>
          <WidthBlock>
            <Typography type="h5">나이</Typography>
            <Grid>
              {AGE_RANGE.map((item, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setFlowContext((prev) => {
                        return {
                          ...prev,
                          context: { ...prev.context, age: item },
                        };
                      });
                    }}
                    selected={
                      flowContext.context && flowContext.context.age === item
                    }
                  >
                    {item}
                  </Button>
                );
              })}
            </Grid>
          </WidthBlock>
        </WidthHeightBlock>
      </Container>
    );
  },
);

SexAndAge.displayName = "SexAndAge";

export default SexAndAge;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;
`;

const Button = styled.button<{
  selected: boolean;
}>`
  width: 88px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  background-color: ${(props) => (props.selected ? "black" : "#f5f6f8")};
  font-size: 16px;
  color: ${(props) => (props.selected ? "white" : "#a1a9ad")};
  padding: 8px 0;
  transition: 0.3s;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
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
  overflow-y: auto;
  padding: 40px 0 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
