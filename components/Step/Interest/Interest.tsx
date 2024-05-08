import Typography from "@/components/Typography";
import { INTEREST } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { toast } from "react-toastify";

const Interest = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">함께하고 싶은 활동은?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {Object.keys(INTEREST).map((category, index1) => (
              <div key={index1}>
                <Category>{category}</Category>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {INTEREST[category].map((item, index2) => {
                    return (
                      <Selection
                        key={index2}
                        onClick={() => {
                          // 3개 이상 선택 불가

                          if (
                            flowContext.context.interest.length >= 2 &&
                            !flowContext.context.interest.includes(item)
                          ) {
                            toast.warn("🦄 최대 2개까지 선택 가능합니다!");
                            return;
                          }
                          setFlowContext((prev) => {
                            return {
                              ...prev,
                              context: {
                                ...prev.context,
                                interest: prev.context.interest.includes(item)
                                  ? prev.context.interest.filter(
                                      (interest) => interest !== item,
                                    )
                                  : [...prev.context.interest, item],
                              },
                            };
                          });
                        }}
                        selected={
                          flowContext.context &&
                          flowContext.context.interest.includes(item)
                        }
                      >
                        {item}
                      </Selection>
                    );
                  })}
                </div>
              </div>
            ))}
          </Grid>
        </WidthHeightBlock>
      </Container>
    );
  },
);

Interest.displayName = "Interest";

export default Interest;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "white")};
  border: solid 1px #d2d5d6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 16px;
  border-radius: 22px;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "white" : "#242729")};
  cursor: pointer;
`;

const Category = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d2d5d6;
`;

const WidthHeightBlock = styled.div<{
  gap?: number;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.gap || 16}px;
  overflow-y: auto;
  padding: 40px 0 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 16px;
  border-radius: 22px;
  background-color: #242729;
`;
