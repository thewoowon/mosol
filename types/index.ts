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
  result = "result",
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
    | "hobby"
    | "result";
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
    result: {
      id: number;
      picture: string;
    };
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

export type ResultDataElementType = {
  category: string;
  stat: string;
  rank: string;
};

export type ResultDataType = {
  eyeshapeStatRankData: ResultDataElementType[];
  faceshapeStatRankData: ResultDataElementType[];
  fashionStatRankData: ResultDataElementType[];
  heightStatRankData: ResultDataElementType[];
  hobbyStatRankData: ResultDataElementType[];
  looklikeStatRankData: ResultDataElementType[];
  mbtiStatRankData: ResultDataElementType[];
};
