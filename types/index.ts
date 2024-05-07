export enum Step {
  sexAndAge = "sexAndAge",
  mbti = "mbti",
  lookLike = "lookLike",
  height = "height",
  eyeShape = "eyeShape",
  faceShape = "faceShape",
  fashion = "fashion",
  interest = "interest",
  hobby = "hobby",
}

export type FlowContextType = {
  direction: "next" | "prev";
  step:
    | "sexAndAge"
    | "mbti"
    | "lookLike"
    | "height"
    | "eyeShape"
    | "faceShape"
    | "fashion"
    | "interest"
    | "hobby";
  index: number;
  context: {
    sex: string | null;
    age: string | null;
    mbti: string | null;
    lookLike: string | null;
    height: string | null;
    eyeShape: string | null;
    faceShape: string | null;
    fashion: string | null;
    interest: string[];
    hobby: string[];
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
