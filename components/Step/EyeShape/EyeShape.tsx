import Typography from "@/components/Typography";
import { EYES_TYPE, EYES_TYPE_I18N } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";

export const getEyeSvg = (type: string): React.ReactNode => {
  switch (type) {
    case "무쌍 실눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M27.5761 33.4431C30.3985 33.4431 32.6864 31.1657 32.6864 28.3563C32.6864 25.547 30.3985 23.2695 27.5761 23.2695C24.7538 23.2695 22.4658 25.547 22.4658 28.3563C22.4658 31.1657 24.7538 33.4431 27.5761 33.4431Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6431 28.3563C24.6431 26.7436 25.956 25.436 27.5764 25.436"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 35C18.9392 35 12 28.5 12 28.5C12 28.5 18.9392 22 27.5 22C36.0608 22 43 28.5 43 28.5C43 28.5 36.0608 35 27.5 35Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "무쌍 왕눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M28.0787 34.4423C31.7169 34.4423 34.6662 31.5588 34.6662 28.0019C34.6662 24.445 31.7169 21.5615 28.0787 21.5615C24.4405 21.5615 21.4912 24.445 21.4912 28.0019C21.4912 31.5588 24.4405 34.4423 28.0787 34.4423Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.2979 28.0015C24.2979 25.9597 25.9904 24.3042 28.0791 24.3042"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 39C16.9538 39 8 28 8 28C8 28 16.9538 17 28 17C39.0462 17 48 28 48 28C48 28 39.0462 39 28 39Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "속쌍 실눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M27.5761 34.4431C30.3985 34.4431 32.6864 32.1657 32.6864 29.3563C32.6864 26.547 30.3985 24.2695 27.5761 24.2695C24.7538 24.2695 22.4658 26.547 22.4658 29.3563C22.4658 32.1657 24.7538 34.4431 27.5761 34.4431Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6431 29.3563C24.6431 27.7436 25.956 26.436 27.5764 26.436"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 36C18.9392 36 12 29.5 12 29.5C12 29.5 18.9392 23 27.5 23C36.0608 23 43 29.5 43 29.5C43 29.5 36.0608 36 27.5 36Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 29C12 29 16.4978 21 27.4924 21C36.0575 21 43 26.8692 43 26.8692"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "속쌍 왕눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M28.0787 34.4423C31.7169 34.4423 34.6662 31.5588 34.6662 28.0019C34.6662 24.445 31.7169 21.5615 28.0787 21.5615C24.4405 21.5615 21.4912 24.445 21.4912 28.0019C21.4912 31.5588 24.4405 34.4423 28.0787 34.4423Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.2979 28.0015C24.2979 25.9597 25.9904 24.3042 28.0791 24.3042"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 39C16.9538 39 8 28 8 28C8 28 16.9538 17 28 17C39.0462 17 48 28 48 28C48 28 39.0462 39 28 39Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 27.8906C8 27.8906 13.8008 15 27.9805 15C39.0267 15 47.9805 24.4572 47.9805 24.4572"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "유쌍 실눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M27.5761 34.4431C30.3985 34.4431 32.6864 32.1657 32.6864 29.3563C32.6864 26.547 30.3985 24.2695 27.5761 24.2695C24.7538 24.2695 22.4658 26.547 22.4658 29.3563C22.4658 32.1657 24.7538 34.4431 27.5761 34.4431Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6431 29.3563C24.6431 27.7436 25.956 26.436 27.5764 26.436"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 36C18.9392 36 12 29.5 12 29.5C12 29.5 18.9392 23 27.5 23C36.0608 23 43 29.5 43 29.5C43 29.5 36.0608 36 27.5 36Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 27C11.5 27 18 21 27.5 21C37 21 44 27.5 44 27.5"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "유쌍 왕눈":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
          <path
            d="M28.0787 34.4423C31.7169 34.4423 34.6662 31.5588 34.6662 28.0019C34.6662 24.445 31.7169 21.5615 28.0787 21.5615C24.4405 21.5615 21.4912 24.445 21.4912 28.0019C21.4912 31.5588 24.4405 34.4423 28.0787 34.4423Z"
            fill="#333333"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.2979 28.0015C24.2979 25.9597 25.9904 24.3042 28.0791 24.3042"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 39C16.9538 39 8 28 8 28C8 28 16.9538 17 28 17C39.0462 17 48 28 48 28C48 28 39.0462 39 28 39Z"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 22.4572C8 22.4572 15 13 27.9805 13C40.5 13 47.9805 22.4572 47.9805 22.4572"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <div></div>;
  }
};

const EyeShape = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    const { t, i18n } = useTranslation();
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">{t("tell_me_eye")}</Typography>
          <Typography type="subtitle1">
            {i18n.language === "ko" ? (
              <>
                가장 원하는{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  한가지
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
                  the Only One
                </span>
              </>
            )}
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {EYES_TYPE_I18N[i18n.language].map((item, index) => {
              return (
                <Selection
                  key={index}
                  onClick={() => {
                    setFlowContext((prev) => {
                      return {
                        ...prev,
                        context: { ...prev.context, eyeShape: item.value },
                      };
                    });
                  }}
                  selected={
                    flowContext.context &&
                    flowContext.context.eyeShape === item.value
                  }
                >
                  {getEyeSvg(item.value)}
                  <Divider />
                  <div>{item.label}</div>
                </Selection>
              );
            })}
          </Grid>
        </WidthHeightBlock>
      </Container>
    );
  },
);

EyeShape.displayName = "EyeShape";

export default EyeShape;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 56px 0 0 0;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
  font-size: 12px;
  width: 100%;
  height: 123px;
  padding: 16px 13px 10px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#242729")};
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
