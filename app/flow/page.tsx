"use client";
import {
  SexAndAge,
  FaceShape,
  Fashion,
  LookLike,
  Height,
  EyeShape,
  Interest,
  // Hobby,
  MBTI,
  Result,
} from "@/components/Step";
import { FlowContextType, Step } from "@/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import styled from "@emotion/styled";
import { BottomButton } from "@/components/Button";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import customAxios from "@/lib/axios";
import { useDrawerStore, useLoaderStore, useModalStore } from "@/stores/global";
import { useRouter } from "next/navigation";

// 20240517 -> result를 단일로 빼서 사용하도록 수정
// 성별&나이 -> 닮은꼴 -> 얼굴형 -> 눈매 -> 키 -> 패션 -> MBTI -> 관심사
const stepSequence = [
  "sexAndAge",
  "lookLike",
  "faceShape",
  "eyeShape",
  "height",
  "fashion",
  "mbti",
  "interest",
  // "result",
];

const FlowPage = () => {
  const router = useRouter();
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
      result: {
        id: 0,
        picture: "",
      },
    },
  });

  const { toggleDrawer, setOnCompleted, setIdolName } = useDrawerStore();
  const { toggleModal } = useModalStore();
  const { onLoader, offLoader } = useLoaderStore();

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
      // hobby: (
      //   <Hobby
      //     key={step}
      //     setFlowContext={setFlowContext}
      //     flowContext={flowContext}
      //   />
      // ),
      result: (
        <Result
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
      toggleModal({
        isOpen: true,
        title: "이상형 생성을 종료하시겠어요?",
        description: "입력한 정보가 모두 사라집니다.",
        onConfirm: () => {
          setIdolName("");
          router.push("/");
        },
      });
      return;
    }

    const prevStep = stepSequence[currentIndex - 1] as string;
    setFlowContext((prev) => {
      return { ...prev, step: prevStep as Step, direction: "prev" };
    });
  };

  const validation = () => {
    if (flowContext.step === "sexAndAge") {
      // 성별과 나이를 선택하지 않았을 때
      if (!flowContext.context.sex) {
        toast.warn("🦄 성별을 선택해주세요!");
        return false;
      }

      if (!flowContext.context.age) {
        toast.warn("🦄 나이를 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "mbti") {
      if (!flowContext.context.mbti) {
        toast.warn("🦄 MBTI을 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "lookLike") {
      if (!flowContext.context.lookLike) {
        toast.warn("🦄 닮은꼴을 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "height") {
      if (!flowContext.context.height) {
        toast.warn("🦄 키를 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "eyeShape") {
      if (!flowContext.context.eyeShape) {
        toast.warn("🦄 눈매를 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "faceShape") {
      if (!flowContext.context.faceShape) {
        toast.warn("🦄 얼굴형을 선택해주세요!");
        return false;
      }
    } else if (flowContext.step === "fashion") {
      if (!flowContext.context.fashion) {
        toast.warn("🦄 패션을 선택해주세요!");
        return false;
      }
    } else {
      // 활동을 선택하지 않았을 때
      if (flowContext.context.interest.length === 0) {
        toast.warn("🦄 활동을 선택해주세요!");
        return false;
      }
    }

    return true;
  };

  const createIdolMutation = useMutation({
    mutationFn: ({
      age,
      sex,
      mbti,
      lookLike,
      height,
      eyeShape,
      faceShape,
      fashion,
      interest,
    }: {
      sex: string | null;
      age: string | null;
      mbti: string | null;
      lookLike: string | null;
      height: string | null;
      eyeShape: string | null;
      faceShape: string | null;
      fashion: string | null;
      interest: string[];
    }) => {
      return customAxios({
        method: "POST",
        url: "/result/saveResult",
        data: {
          age,
          sex,
          mbti,
          lookLike,
          height,
          eyeShape,
          faceShape,
          fashion,
          hobbyList: interest,
        },
      }).then((res: any) => res.data);
    },
    onSuccess: (response: any) => {
      const { code, data } = response;
      if (code === "200") {
        toast.success("🎉 이상형 생성에 성공했어요!");
        // router.push(`/result/${data.id}`);
        setTimeout(() => {
          window.location.href = `/result/${data.id}`;
        }, 2000);

        // setFlowContext((prev) => {
        //   return {
        //     ...prev,
        //     context: {
        //       ...prev.context,
        //       result: {
        //         id: data.id,
        //         picture: data.picture,
        //       },
        //     },
        //     step: "result" as Step,
        //     direction: "next",
        //   };
        // });
      } else {
        toast.error("😭 이상형 생성에 실패했어요... 다시 시도해 주세요");
        offLoader();
      }
    },
    onError: () => {
      toast.error("😭 이상형 생성에 실패했어요... 다시 시도해 주세요");
      offLoader();
    },
  });

  // useEffect(() => {
  //   console.log(flowContext.step);
  // }, [flowContext.step]);

  return (
    <Container
      backgroundColor={flowContext.step !== "result" ? "#ffffff" : "#242729"}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          flex: 1,
        }}
      >
        {flowContext.step !== "result" && (
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
        )}
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
              width: "100%",
              flex: 1,
            }}
          >
            {getComponent(flowContext.step)}
          </motion.div>
        </AnimatePresence>
      </div>
      <WidthBlock>
        {flowContext.step !== "result" && (
          <BottomButton
            onClick={() => {
              if (!validation()) return;
              // 마지막 단계일 때
              if (flowContext.step === "interest") {
                const {
                  age,
                  sex,
                  mbti,
                  lookLike,
                  height,
                  eyeShape,
                  faceShape,
                  fashion,
                  interest,
                } = flowContext.context;

                if (!age) {
                  toast.error("😭 나이를 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "sexAndAge" as Step };
                  });
                  return;
                }

                if (!sex) {
                  toast.error("😭 성별을 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "sexAndAge" as Step };
                  });
                  return;
                }

                if (!mbti) {
                  toast.error("😭 MBTI를 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "mbti" as Step };
                  });
                  return;
                }

                if (!lookLike) {
                  toast.error("😭 닮은꼴을 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "lookLike" as Step };
                  });
                  return;
                }

                if (!height) {
                  toast.error("😭 키를 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "height" as Step };
                  });
                  return;
                }

                if (!eyeShape) {
                  toast.error("😭 눈매를 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "eyeShape" as Step };
                  });
                  return;
                }

                if (!faceShape) {
                  toast.error("😭 얼굴형을 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "faceShape" as Step };
                  });
                  return;
                }

                if (!fashion) {
                  toast.error("😭 패션을 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "fashion" as Step };
                  });
                  return;
                }

                if (interest.length === 0) {
                  toast.error("😭 관심사를 선택해주세요!");
                  setFlowContext((prev) => {
                    return { ...prev, step: "interest" as Step };
                  });
                  return;
                }

                createIdolMutation.mutate({
                  age,
                  sex,
                  mbti,
                  lookLike,
                  height,
                  eyeShape,
                  faceShape,
                  fashion,
                  interest,
                });
                onLoader();
                return;
              }

              const currentIndex = stepSequence.indexOf(flowContext.step);

              const nextStep = stepSequence[currentIndex + 1] as string;
              setFlowContext((prev) => {
                return { ...prev, step: nextStep as Step, direction: "next" };
              });
            }}
            label={flowContext.step === "interest" ? "완료" : "다음"}
          />
        )}
        {flowContext.step === "lookLike" && (
          <BottomButton
            skeleton={true}
            onClick={() => {
              toggleDrawer();
              setOnCompleted((idolName: string) => {
                setFlowContext((prev) => {
                  return {
                    ...prev,
                    context: {
                      ...prev.context,
                      lookLike: idolName,
                    },
                    step: "height" as Step,
                    direction: "next",
                  };
                });
              });
            }}
            label={"이중에 없어요!"}
          />
        )}
      </WidthBlock>
    </Container>
  );
};

export default FlowPage;

const Container = styled.div<{
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 56px 16px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "#242729"};
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
`;

const BackArrow = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
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
