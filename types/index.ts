export type FlowContextType = {
  step:
    | "sex"
    | "mbti"
    | "lookLike"
    | "height"
    | "eyeShape"
    | "faceShape"
    | "fashion"
    | "interest"
    | "hobby";
  context: {
    sex: string | null;
    mbti: string | null;
    lookLike: string | null;
    height: string | null;
    eyeShape: string | null;
    faceShape: string | null;
    fashion: string | null;
    interest: string | null;
    hobby: string | null;
  };
};

export type InPropType = {
  inProp: boolean;
  setInProp: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CommonStepType = {
  flowContext: FlowContextType;
  setFlowContext: React.Dispatch<React.SetStateAction<FlowContextType>>;
} & React.RefAttributes<HTMLDivElement>;
