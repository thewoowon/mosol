"use client";
import {
  SexAndAge,
  FaceShape,
  Fashion,
  LookLike,
  Height,
  EyeShape,
  Interest,
  Hobby,
  MBTI,
} from "@/components/Step";
import { FlowContextType, Step } from "@/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import styled from "@emotion/styled";

const stepSequence = [
  "sexAndAge",
  "mbti",
  "lookLike",
  "height",
  "eyeShape",
  "faceShape",
  "fashion",
  "interest",
  "hobby",
];

const FlowPage = () => {
  const [flowContext, setFlowContext] = useState<FlowContextType>({
    direction: "next",
    step: "sexAndAge",
    index: 0,
    context: {
      sex: null,
      age: null,
      mbti: null,
      lookLike: null,
      height: null,
      eyeShape: null,
      faceShape: null,
      fashion: null,
      interest: [],
      hobby: [],
    },
  });

  const getComponent = (step: string) => {
    const components: {
      [key: string]: JSX.Element | null;
    } = {
      sexAndAge: (
        <SexAndAge
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

  const handleBack = () => {
    const currentIndex = stepSequence.indexOf(flowContext.step);
    if (currentIndex === 0) {
      return;
    }

    const prevStep = stepSequence[currentIndex - 1] as string;
    setFlowContext((prev) => {
      return { ...prev, step: prevStep as Step, direction: "prev" };
    });
  };

  return (
    <Container>
      <Navigation>
        <BackArrow onClick={handleBack}>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L1 8L8 1"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackArrow>
        <ProgressBar
          gauge={
            ((stepSequence.indexOf(flowContext.step) + 1) /
              stepSequence.length) *
            100
          }
        />
      </Navigation>
      <AnimatePresence mode="wait">
        <motion.div
          key={flowContext.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
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
  height: 100%;
  padding: 56px 16px;
  width: 100%;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
  padding: 0 42px;
`;

const BackArrow = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
