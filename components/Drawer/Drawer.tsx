import { useDrawerStore } from "@/stores/global";
import React from "react";
import styled from "@emotion/styled";

const Drawer = () => {
  const { isOpen, toggleDrawer, node } = useDrawerStore();

  if (!node) return null;

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
          padding: "20px",
          transition: "left 0.3s ease-in-out",
          zIndex: 100,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        {node}
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
