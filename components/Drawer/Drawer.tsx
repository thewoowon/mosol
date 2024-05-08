import { useDrawerStore } from "@/stores/global";
import React from "react";
import styled from "@emotion/styled";

const Drawer = () => {
  const { isOpen, toggleDrawer, node } = useDrawerStore();

  return (
    <Container>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-250px",
          width: "250px",
          height: "100vh",
          backgroundColor: "#f1f1f1",
          padding: "20px",
          transition: "left 0.3s ease-in-out",
        }}
      >
        {node}
      </div>
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  background-color: #000;
`;
