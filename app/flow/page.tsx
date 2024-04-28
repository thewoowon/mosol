"use client";

import {
  Sex,
  FaceShape,
  Fashion,
  LookLike,
  Height,
  EyeShape,
  Interest,
  Hobby,
  MBTI,
} from "@/components/Step";
import { FlowContextType } from "@/types";
import styled from "@emotion/styled";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FlowPage = () => {
  const [flowContext, setFlowContext] = useState<FlowContextType>({
    step: "sex",
    context: {
      sex: null,
      mbti: null,
      lookLike: null,
      height: null,
      eyeShape: null,
      faceShape: null,
      fashion: null,
      interest: null,
      hobby: null,
    },
  });

  const renderComponent = () => {
    switch (flowContext.step) {
      case "sex":
        return (
          <Sex
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "mbti":
        return (
          <MBTI
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "lookLike":
        return (
          <LookLike
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "height":
        return (
          <Height
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "eyeShape":
        return (
          <EyeShape
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "faceShape":
        return (
          <FaceShape
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "fashion":
        return (
          <Fashion
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "interest":
        return (
          <Interest
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      case "hobby":
        return (
          <Hobby
            key={flowContext.step}
            setFlowContext={setFlowContext}
            flowContext={flowContext}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <TransitionGroup>
        <CSSTransition key={flowContext.step} timeout={300} classNames="fade">
          {renderComponent()}
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default FlowPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
