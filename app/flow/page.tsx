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
import { AnimatePresence, motion } from "framer-motion";

const FlowPage = () => {
  const [flowContext, setFlowContext] = useState<FlowContextType>({
    direction: "next",
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

  const getComponent = (step: string) => {
    const components: {
      [key: string]: JSX.Element | null;
    } = {
      sex: (
        <Sex
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      mbti: (
        <MBTI
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      lookLike: (
        <LookLike
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      height: (
        <Height
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      eyeShape: (
        <EyeShape
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      faceShape: (
        <FaceShape
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      fashion: (
        <Fashion
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      interest: (
        <Interest
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
      hobby: (
        <Hobby
          key={step}
          setFlowContext={setFlowContext}
          flowContext={flowContext}
        />
      ),
    };

    return components[step] || null;
  };

  return (
    <Container>
      <AnimatePresence mode="wait">
        <motion.div
          key={flowContext.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {getComponent(flowContext.step)}
        </motion.div>
      </AnimatePresence>
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
