import { useModalStore } from "@/stores/global";
import React from "react";
import styled from "@emotion/styled";
import Typography from "../Typography";
import { useTranslation } from "react-i18next";

const Modal = () => {
  const { isOpen, title, description, onConfirm, toggleModal } =
    useModalStore();

  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <BackgroundLayer />
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          padding: "20px",
          transition: "left 0.3s ease-in-out",
          zIndex: 100,
          borderRadius: "20px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
        }}
      >
        <Typography type="h5">{title}</Typography>
        <Typography type="body1">{description}</Typography>
        <Flex>
          <Button
            onClick={() => {
              toggleModal({
                isOpen: false,
                title: "",
                description: "",
                onConfirm: () => {},
              });
            }}
            skeleton
          >
            {t("cancel")}
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              toggleModal({
                isOpen: false,
                title: "",
                description: "",
                onConfirm: () => {},
              });
            }}
          >
            {t("confirm")}
          </Button>
        </Flex>
      </div>
    </Container>
  );
};

export default Modal;

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

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button<{
  skeleton?: boolean;
}>`
  background-color: ${(props) => (props.skeleton ? "white" : "#fa6ee3")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  flex: 1;

  ${(props) =>
    props.skeleton &&
    `
    border: solid 1px #fa6ee3;
    color: #fa6ee3;
  `}
`;
