"use client";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        top: "10px",
        right: "10px",
        zIndex: 1000,
      }}
    >
      <Button onClick={() => changeLanguage("en")}>English</Button>
      <Button onClick={() => changeLanguage("ko")}>한국어</Button>
    </div>
  );
};

export default LanguageSwitcher;

const Button = styled.button`
  width: 72px;
  height: 36px;
  border-radius: 4px;
  background-color: #fa6ee3;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  letter-spacing: normal;
  text-wrap: nowrap;
`;
