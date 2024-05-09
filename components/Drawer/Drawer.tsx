import { useDrawerStore } from "@/stores/global";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Typography from "../Typography";

const Drawer = () => {
  const { isOpen, toggleDrawer } = useDrawerStore();
  const [idolName, setIdolName] = useState<string>("");

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <BackgroundLayer />
      <div
        style={{
          position: "absolute",
          bottom: isOpen ? 0 : "-250px",
          width: "100%",
          height: "450px",
          backgroundColor: "white",
          transition: "left 0.3s ease-in-out",
          zIndex: 100,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "14px 24px",
            }}
          >
            <div
              style={{
                width: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>좋아하는 인물 입력</div>
              <div
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  right: "0",
                  top: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  toggleDrawer();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L1 15"
                    stroke="#333333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 15L1 1"
                    stroke="#333333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Divider />
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography type="h5">이상형 이름을 입력해주세요.</Typography>
            <Input
              type="text"
              placeholder="이름 입력"
              value={idolName}
              onChange={(e) => {
                setIdolName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" && idolName.length > 0) {
                  toggleDrawer();
                }
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              {idolName.length > 0 && (
                <button
                  style={{
                    backgroundColor: "#FFD600",
                    color: "#242729",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    toggleDrawer();
                  }}
                >
                  완료
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d2d5d6;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: #242729;
  outline: none;
  border-bottom: 1px solid #d2d5d6;
`;
