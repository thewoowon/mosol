import RadioButton from "@/components/RadioButton";
import Typography from "@/components/Typography";
import {
  AGE_RANGE,
  AGE_RANGE_I18N,
  SEX_ITEMS,
  SEX_ITEMS_I18N,
} from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";

const SexAndAge = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    const { t, i18n } = useTranslation();
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">{t("tell_me_sex_and_age")}</Typography>
          <Typography type="subtitle1">{t("make_for_text")}</Typography>
        </WidthBlock>
        <WidthHeightBlock gap={84}>
          <WidthBlock>
            <Typography type="h5">{t("sex")}</Typography>
            <RadioButton
              list={SEX_ITEMS_I18N[i18n.language].map((item, index) => item)}
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
            <Typography type="h5">{t("age")}</Typography>
            <Grid>
              {AGE_RANGE_I18N[i18n.language].map((item, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setFlowContext((prev) => {
                        return {
                          ...prev,
                          context: { ...prev.context, age: item.value },
                        };
                      });
                    }}
                    selected={
                      flowContext.context &&
                      flowContext.context.age === item.value
                    }
                  >
                    {item.label}
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
