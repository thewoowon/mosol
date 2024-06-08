import Typography from "@/components/Typography";
import { INTEREST, INTEREST_I18N } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Interest = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    const { t, i18n } = useTranslation();
    const getKeyName = (key: string, language: string) => {
      switch (key) {
        case "art":
          return language === "ko" ? "문화예술" : "Art";
        case "sport":
          return language === "ko" ? "스포츠" : "Sport";
        case "experience":
          return language === "ko" ? "체험" : "Experience";
        default:
          return "";
      }
    };
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">{t("tell_me_interest")}</Typography>
          <Typography type="subtitle1">
            {i18n.language === "ko" ? (
              <>
                가장 원하는{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  두가지
                </span>
                를 선택해주세요
              </>
            ) : (
              <>
                Choose{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Two Things
                </span>
              </>
            )}
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {Object.keys(INTEREST_I18N[i18n.language]).map(
              (category, index1) => (
                <div
                  key={index1}
                  style={{
                    borderBottom: "1px solid #d2d5d6",
                    paddingBottom: "16px",
                    marginBottom: "20px",
                    height: "fit-content",
                  }}
                >
                  <Category>{getKeyName(category, i18n.language)}</Category>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {INTEREST_I18N[i18n.language][category].map(
                      (item, index2) => {
                        return (
                          <Selection
                            key={index2}
                            onClick={() => {
                              // 3개 이상 선택 불가

                              if (
                                flowContext.context.interest.length >= 2 &&
                                !flowContext.context.interest.includes(
                                  item.value,
                                )
                              ) {
                                toast.warn("🦄 최대 2개까지 선택 가능합니다!");
                                return;
                              }
                              setFlowContext((prev) => {
                                return {
                                  ...prev,
                                  context: {
                                    ...prev.context,
                                    interest: prev.context.interest.includes(
                                      item.value,
                                    )
                                      ? prev.context.interest.filter(
                                          (interest) => interest !== item.value,
                                        )
                                      : [...prev.context.interest, item.value],
                                  },
                                };
                              });
                            }}
                            selected={
                              flowContext.context &&
                              flowContext.context.interest.includes(item.value)
                            }
                          >
                            {item.label}
                          </Selection>
                        );
                      },
                    )}
                  </div>
                </div>
              ),
            )}
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
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 56px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
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
  color: black;
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
