export const SEX_ITEMS: string[] = ["남자", "여자"];
export const SEX_ITEMS_I18N: {
  [key: string]: {
    label: string;
    value: string;
  }[];
} = {
  ko: [
    {
      label: "남자",
      value: "남자",
    },
    {
      label: "여자",
      value: "여자",
    },
  ],
  en: [
    {
      label: "male",
      value: "남자",
    },
    {
      label: "female",
      value: "여자",
    },
  ],
};

export const AGE_RANGE: string[] = [
  "10대",
  "20대",
  "30대",
  "40대",
  "50대 이상",
];

export const AGE_RANGE_I18N: {
  [key: string]: {
    label: string;
    value: string;
  }[];
} = {
  ko: [
    {
      label: "10대",
      value: "10대",
    },
    {
      label: "20대",
      value: "20대",
    },
    {
      label: "30대",
      value: "30대",
    },
    {
      label: "40대",
      value: "40대",
    },
    {
      label: "50대 이상",
      value: "50대 이상",
    },
  ],
  en: [
    {
      label: "10s",
      value: "10대",
    },
    {
      label: "20s",
      value: "20대",
    },
    {
      label: "30s",
      value: "30대",
    },
    {
      label: "40s",
      value: "40대",
    },
    {
      label: "50s",
      value: "50대 이상",
    },
  ],
};

export const MBTI_ITEMS: {
  type: string;
  description: string;
  detail: string;
}[] = [
  {
    type: "ISTJ",
    description: "현실적이고 철저한 계획을 세우며, 안정적인 연애를",
    detail: "추구하고 상대방에게 신뢰감을 주는 타입",
  },
  {
    type: "ISFJ",
    description: "조용하고 배려심이 많으며, 상대방의 감정을 잘 이해하지만",
    detail: "자신의 감정을 표현하는 데 어려움을 느끼는 타입",
  },
  {
    type: "INFJ",
    description: "창의적이고 직관력이 뛰어나며, 깊은 생각을",
    detail: "가지고 있으며 인내심이 강한 타입",
  },
  {
    type: "INTJ",
    description: "논리적이고 분석적이며, 지적인 면이 강하고",
    detail: "독립적인 성향을 가지며, 미래를 중시하는 타입",
  },
  {
    type: "ISTP",
    description: "호기심이 많고 관찰력이 뛰어나며, 자유로운 연애를",
    detail: "추구하고 새로운 경험을 즐기는 스타일",
  },
  {
    type: "ISFP",
    description: "감성적이고 예술적인 면이 강하며, 따뜻하고 부드러운",
    detail: "성격을 가지지만 자신의 감정을 숨기는 타입",
  },
  {
    type: "INFP",
    description: "상상력이 풍부하고 창의적이며,",
    detail: "낭만적이면서 선한 스타일",
  },
  {
    type: "INTP",
    description: "독창적이고 혁신적인 아이디어, 복잡한 문제를 해결하는",
    detail: "능력이 뛰어나지만 대인관계의 어려움을 겪는 타입",
  },
  {
    type: "ESTP",
    description: "활동적이고 적극적이며, 모험을 즐기며 재미있고",
    detail: "유쾌한 연애를 추구하는 도전자형 스타일",
  },
  {
    type: "ESFP",
    description: "밝고 사교적이며, 매력적이면서 분위기를",
    detail: "잘 이끌어가고 유쾌한 스타일",
  },
  {
    type: "ENFP",
    description: "열정적이고 창의적이며, 다양한 경험을 중요시하며",
    detail: "즉흥적인 부분도 있지만 애정도 많은 타입",
  },
  {
    type: "ENTP",
    description: "독창적이고 창의적이며, 도전적인 정신을 가지며",
    detail: "개방적인 연애를 추구하고 매력적인 스타일",
  },
  {
    type: "ESTJ",
    description: "현실적이고 실용적인 사고방식을 가지며,",
    detail: "체계적인 연애를 추구하며 책임감이 강한 타입",
  },
  {
    type: "ESFJ",
    description: "친절하고 배려심이 많으며, 안정적인 연애를",
    detail: "추구하며 타인과의 관계를 중요시하는 스타일",
  },
  {
    type: "ENFJ",
    description: "공감능력이 뛰어나며, 헌신적인 모습을 보이며",
    detail: "따뜻한 마음을 가지고 배려심이 깊은 타입",
  },
  {
    type: "ENTJ",
    description: "리더십이 강하고 목표지향적이며, 주도적인",
    detail: "연애를 선호하며 자기주장이 강한 스타일",
  },
];

export const MBTI_ITEMS_I18N: {
  [key: string]: {
    type: string;
    description: string;
    detail: string;
  }[];
} = {
  ko: [
    {
      type: "ISTJ",
      description: "현실적이고 철저한 계획을 세우며, 안정적인 연애를",
      detail: "추구하고 상대방에게 신뢰감을 주는 타입",
    },
    {
      type: "ISFJ",
      description: "조용하고 배려심이 많으며, 상대방의 감정을 잘 이해하지만",
      detail: "자신의 감정을 표현하는 데 어려움을 느끼는 타입",
    },
    {
      type: "INFJ",
      description: "창의적이고 직관력이 뛰어나며, 깊은 생각을",
      detail: "가지고 있으며 인내심이 강한 타입",
    },
    {
      type: "INTJ",
      description: "논리적이고 분석적이며, 지적인 면이 강하고",
      detail: "독립적인 성향을 가지며, 미래를 중시하는 타입",
    },
    {
      type: "ISTP",
      description: "호기심이 많고 관찰력이 뛰어나며, 자유로운 연애를",
      detail: "추구하고 새로운 경험을 즐기는 스타일",
    },
    {
      type: "ISFP",
      description: "감성적이고 예술적인 면이 강하며, 따뜻하고 부드러운",
      detail: "성격을 가지지만 자신의 감정을 숨기는 타입",
    },
    {
      type: "INFP",
      description: "상상 력이 풍부하고 창의적이며,",
      detail: "낭만적이면서 선한 스타일",
    },
    {
      type: "INTP",
      description: "독창적이고 혁신적인 아이디어, 복잡한 문제를 해결하는",
      detail: "능력이 뛰어나지만 대인관계의 어려움을 겪는 타입",
    },
    {
      type: "ESTP",
      description: "활동적이고 적극적이며, 모험을 즐기며 재미있고",
      detail: "유쾌한 연애를 추구하는 도전자형 스타일",
    },
    {
      type: "ESFP",
      description: "밝고 사교적이며, 매력적이면서 분위기를",
      detail: "잘 이끌어가고 유쾌한 스타일",
    },
    {
      type: "ENFP",
      description: "열정적이고 창의적이며, 다양한 경험을 중요시하며",
      detail: "즉흥적인 부분도 있지만 애정도 많은 타입",
    },
    {
      type: "ENTP",
      description: "독창적이고 창의적이며, 도전적인 정신을 가지며",
      detail: "개방적인 연애를 추구하고 매력적인 스타일",
    },
    {
      type: "ESTJ",
      description: "현실적이고 실용적인 사고방식을 가지며,",
      detail: "체계적인 연애를 추구하며 책임감이 강한 타입",
    },
    {
      type: "ESFJ",
      description: "친절하고 배려심이 많으며, 안정적인 연애를",
      detail: "추구하며 타인과의 관계를 중요시하는 스타일",
    },
    {
      type: "ENFJ",
      description: "공감능력이 뛰어나며, 헌신적인 모습을 보이며",
      detail: "따뜻한 마음을 가지고 배려심이 깊은 타입",
    },
    {
      type: "ENTJ",
      description: "리더십이 강하고 목표지향적이며, 주도적인",
      detail: "연애를 선호하며 자기주장이 강한 스타일",
    },
  ],
  en: [
    {
      type: "ISTJ",
      description: "Realistic, meticulous planner, trustworthy",
      detail: "",
    },
    {
      type: "ISFJ",
      description: "Quiet, empathetic",
      detail: "",
    },
    {
      type: "INFJ",
      description: "Creative, intuitive, patient.",
      detail: "",
    },
    {
      type: "INTJ",
      description: "Logical, intellectual, future-focused.",
      detail: "",
    },
    {
      type: "ISTP",
      description: "Observant, seeks freedom in relationships",
      detail: "",
    },
    {
      type: "ISFP",
      description: "Emotional, artistic, Lazy",
      detail: "",
    },
    {
      type: "INFP",
      description: "Imaginative, romantic, kind.",
      detail: "",
    },
    {
      type: "INTP",
      description: "Original, innovative, Deep",
      detail: "",
    },
    {
      type: "ESTP",
      description: "Active, adventurous, fun-loving",
      detail: "",
    },
    {
      type: "ESFP",
      description: "Bright, sociable, charming",
      detail: "",
    },
    {
      type: "ENFP",
      description: "Passionate, creative, spontaneous",
      detail: "",
    },
    {
      type: "ENTP",
      description: "Unique, adventurous, open-minded",
      detail: "",
    },
    {
      type: "ESTJ",
      description: "Realistic, practical, responsible.",
      detail: "",
    },
    {
      type: "ESFJ",
      description: "Kind, considerate, values connections.",
      detail: "",
    },
    {
      type: "ENFJ",
      description: "Empathetic, devoted, considerate.",
      detail: "",
    },
    {
      type: "ENTJ",
      description: "Strong leadership, goal-oriented, assertive.",
      detail: "",
    },
  ],
};

export const LOOK_LIKE: {
  [key: string]: {
    name: string;
    description: string;
    src: string;
    enName?: string;
  }[];
} = {
  MALE: [
    {
      name: "카리나",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3de3ee46-1a4c-42f1-fcb7-6cb8f4c5f500/public",
      enName: "Karina",
    },
    {
      name: "장원영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6976cbeb-d19f-43cf-22a9-5cd8408b6b00/public",
      enName: "Jang Won-young",
    },
    {
      name: "권은비",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b52f1322-8f6a-4826-2c21-9dda12cb0c00/public",
      enName: "Kwon Eun-bi",
    },
    {
      name: "수지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6d011459-3d3f-4e87-7c02-9e0ed14cb500/public",
      enName: "Suzy",
    },
    {
      name: "강해린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ae78925b-720f-4a18-cea8-6a108bb46b00/public",
      enName: "Kang Hae-rin",
    },
    {
      name: "민지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2227894f-3d33-477c-7c6a-608948fbc000/public",
      enName: "Minji",
    },
    {
      name: "한효주",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/bc8eb79f-82fb-4880-8b9e-dbaac72ca700/public",
      enName: "Han Hyo-joo",
    },
    {
      name: "아이린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2482c056-51e3-492e-dec5-c48cc8901a00/public",
      enName: "Irene",
    },
    {
      name: "김지원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/29cc53ad-cd0e-435c-790c-e9f7b6240600/public",
      enName: "Kim Ji-won",
    },
    {
      name: "김채원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6b325c94-c368-4468-8475-6fb12cbf4700/public",
      enName: "Kim Chae-won",
    },
    {
      name: "아이유",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f9c55bfa-2b41-4a00-3992-b142aafecd00/public",
      enName: "IU",
    },
    {
      name: "다현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2bea5f6a-fa9d-49ca-65d2-70072aa20100/public",
      enName: "Dahyun",
    },
    {
      name: "전효성",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/87a6aeb3-fa6a-414e-c1be-c367ee568300/public",
      enName: "Jeon Hyo-sung",
    },
    {
      name: "박보영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5952d8c1-82a6-48ec-56ce-0d0b4d1ab400/public",
      enName: "Park Bo-young",
    },
    {
      name: "한예슬",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3156899-504e-4b8b-c15e-6609c0266d00/public",
      enName: "Han Ye-seul",
    },
    {
      name: "윤승아",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/01495c62-ffd9-4349-5604-4753e4e43900/public",
      enName: "Yoon Seung-ah",
    },
    {
      name: "한가인",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f8495161-7966-48be-5cbd-8cf08a68a500/public",
      enName: "Han Ga-in",
    },
    {
      name: "김태희",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dd23fb54-5f6e-493b-d270-0798fb159200/public",
      enName: "Kim Tae-hee",
    },
  ],
  FEMALE: [
    {
      name: "이도현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a232bdb1-dd8f-4750-c955-7c5f30728b00/public",
      enName: "Lee Do-hyun",
    },
    {
      name: "진",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/aff4291a-19bb-4053-ac3e-8d74a0231c00/public",
      enName: "Jin",
    },
    {
      name: "윤두준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3cbbb1f-bf9d-4bf3-e049-43017861af00/public",
      enName: "Yoon Doo-joon",
    },
    {
      name: "영케이",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/54b82ec2-116d-4bac-5025-90be2cc74000/public",
      enName: "Young K",
    },
    {
      name: "뷔",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b88e0750-5e2d-4569-ee8e-f4670973bc00/public",
      enName: "V",
    },
    {
      name: "현빈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4583f7dd-b91d-463f-6189-6c3202645a00/public",
      enName: "Hyun Bin",
    },
    {
      name: "주우재",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/19659a44-b541-4ff5-c338-3d8c9ab03100/public",
      enName: "Ju Woo-jae",
    },
    {
      name: "서강준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/31e0b54c-cb2f-45e7-5a63-4c09ea240200/public",
      enName: "Seo Kang-joon",
    },
    {
      name: "손석구",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8701064c-e966-43f1-f47a-46cd8a788900/public",
      enName: "Son Seok-gu",
    },
    {
      name: "정국",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a8352a59-be33-45d9-1617-d6f99d06b500/public",
      enName: "Jungkook",
    },
    {
      name: "최우식",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8c69f560-6ae0-43cb-5886-f8db66315200/public",
      enName: "Choi Woo-shik",
    },
    {
      name: "이제훈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/db6e56aa-898f-4a52-d272-cbad40978600/public",
      enName: "Lee Je-hoon",
    },
    {
      name: "강하늘",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/49d04ac6-e351-4d3f-8e16-11f5ffd52100/public",
      enName: "Kang Ha-neul",
    },
    {
      name: "원필",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/7bad5034-7185-4ee4-1c98-ae3345367f00/public",
      enName: "Wonpil",
    },
    {
      name: "남주혁",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d60ac831-5a52-489e-b19b-696729c10e00/public",
      enName: "Nam Joo-hyuk",
    },
    {
      name: "차은우",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/82d088a9-ebb0-4c9c-bcd6-2acfab269d00/public",
      enName: "Cha Eun-woo",
    },
    {
      name: "박보검",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/66dee085-ff6d-4b84-97af-c85143028100/public",
      enName: "Park Bo-gum",
    },
    {
      name: "송강",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f203ec00-0d37-4e48-9f31-e2943b141d00/public",
      enName: "Song Kang",
    },
  ],
};

export const HEIGHT_RANGE: {
  [key: string]: string[];
} = {
  MALE: [
    "170cm 이하",
    "171cm ~ 175cm",
    "176cm ~ 180cm",
    "181cm ~ 185cm",
    "186cm 이상",
  ],
  FEMALE: [
    "155cm 이하",
    "156cm ~ 160cm",
    "161cm ~ 165cm",
    "166cm ~ 170cm",
    "171cm 이상",
  ],
};

export const HEIGHT_RANGE_I18N: {
  [key: string]: {
    [key: string]: {
      label: string;
      value: string;
    }[];
  };
} = {
  ko: {
    MALE: [
      {
        label: "170cm 이하",
        value: "170cm 이하",
      },
      {
        label: "171cm ~ 175cm",
        value: "171cm ~ 175cm",
      },
      {
        label: "176cm ~ 180cm",
        value: "176cm ~ 180cm",
      },
      {
        label: "181cm ~ 185cm",
        value: "181cm ~ 185cm",
      },
      {
        label: "186cm 이상",
        value: "186cm 이상",
      },
    ],
    FEMALE: [
      {
        label: "155cm 이하",
        value: "155cm 이하",
      },
      {
        label: "156cm ~ 160cm",
        value: "156cm ~ 160cm",
      },
      {
        label: "161cm ~ 165cm",
        value: "161cm ~ 165cm",
      },
      {
        label: "166cm ~ 170cm",
        value: "166cm ~ 170cm",
      },
      {
        label: "171cm 이상",
        value: "171cm 이상",
      },
    ],
  },
  en: {
    MALE: [
      {
        label: "Under 170cm",
        value: "170cm 이하",
      },
      {
        label: "171cm ~ 175cm",
        value: "171cm ~ 175cm",
      },
      {
        label: "176cm ~ 180cm",
        value: "176cm ~ 180cm",
      },
      {
        label: "181cm ~ 185cm",
        value: "181cm ~ 185cm",
      },
      {
        label: "Over 186cm",
        value: "186cm 이상",
      },
    ],
    FEMALE: [
      {
        label: "Under 155cm",
        value: "155cm 이하",
      },
      {
        label: "156cm ~ 160cm",
        value: "156cm ~ 160cm",
      },
      {
        label: "161cm ~ 165cm",
        value: "161cm ~ 165cm",
      },
      {
        label: "166cm ~ 170cm",
        value: "166cm ~ 170cm",
      },
      {
        label: "Over 171cm",
        value: "171cm 이상",
      },
    ],
  },
};

export const EYES_TYPE: string[] = [
  "무쌍 실눈",
  "무쌍 왕눈",
  "속쌍 실눈",
  "속쌍 왕눈",
  "유쌍 실눈",
  "유쌍 왕눈",
];

export const EYES_TYPE_I18N: {
  [key: string]: {
    label: string;
    value: string;
  }[];
} = {
  ko: [
    {
      label: "무쌍 실눈",
      value: "무쌍 실눈",
    },
    {
      label: "무쌍 왕눈",
      value: "무쌍 왕눈",
    },
    {
      label: "속쌍 실눈",
      value: "속쌍 실눈",
    },
    {
      label: "속쌍 왕눈",
      value: "속쌍 왕눈",
    },
    {
      label: "유쌍 실눈",
      value: "유쌍 실눈",
    },
    {
      label: "유쌍 왕눈",
      value: "유쌍 왕눈",
    },
  ],
  en: [
    {
      label: "Monolid Single Eyelid",
      value: "무쌍 실눈",
    },
    {
      label: "Monolid Double Eyelid",
      value: "무쌍 왕눈",
    },
    {
      label: "Inner Double Eyelid",
      value: "속쌍 실눈",
    },
    {
      label: "Inner Double Eyelid",
      value: "속쌍 왕눈",
    },
    {
      label: "Outer Double Eyelid",
      value: "유쌍 실눈",
    },
    {
      label: "Outer Double Eyelid",
      value: "유쌍 왕눈",
    },
  ],
};

export const FACE_SHAPE: {
  [key: string]: string[];
} = {
  MALE: [
    "강아지상",
    "고양이상",
    "공룡상",
    "토끼상",
    "두부상",
    "늑대상",
    "꼬부기상",
    "사슴상",
    "사막여우상",
  ],
  FEMALE: [
    "강아지상",
    "고양이상",
    "오리상",
    "토끼상",
    "두부상",
    "사막여우상",
    "햄스터상",
    "사슴상",
    "꼬부기상",
  ],
};

export const FACE_SHAPE_I18N: {
  [key: string]: {
    [key: string]: {
      label: string;
      value: string;
    }[];
  };
} = {
  ko: {
    MALE: [
      {
        label: "강아지상",
        value: "강아지상",
      },
      {
        label: "고양이상",
        value: "고양이상",
      },
      {
        label: "공룡상",
        value: "공룡상",
      },
      {
        label: "토끼상",
        value: "토끼상",
      },
      {
        label: "두부상",
        value: "두부상",
      },
      {
        label: "늑대상",
        value: "늑대상",
      },
      {
        label: "꼬부기상",
        value: "꼬부기상",
      },
      {
        label: "사슴상",
        value: "사슴상",
      },
      {
        label: "사막여우상",
        value: "사막여우상",
      },
    ],
    FEMALE: [
      {
        label: "강아지상",
        value: "강아지상",
      },
      {
        label: "고양이상",
        value: "고양이상",
      },
      {
        label: "오리상",
        value: "오리상",
      },
      {
        label: "토끼상",
        value: "토끼상",
      },
      {
        label: "두부상",
        value: "두부상",
      },
      {
        label: "사막여우상",
        value: "사막여우상",
      },
      {
        label: "햄스터상",
        value: "햄스터상",
      },
      {
        label: "사슴상",
        value: "사슴상",
      },
      {
        label: "꼬부기상",
        value: "꼬부기상",
      },
    ],
  },
  en: {
    MALE: [
      {
        label: "Dog-like",
        value: "강아지상",
      },
      {
        label: "Cat-like",
        value: "고양이상",
      },
      {
        label: "Dinosaur-like",
        value: "공룡상",
      },
      {
        label: "Rabbit-like",
        value: "토끼상",
      },
      {
        label: "Tofu-like",
        value: "두부상",
      },
      {
        label: "Wolf-like",
        value: "늑대상",
      },
      {
        label: "Squirtle-like",
        value: "꼬부기상",
      },
      {
        label: "Deer-like",
        value: "사슴상",
      },
      {
        label: "Desert Fox-like",
        value: "사막여우상",
      },
    ],
    FEMALE: [
      {
        label: "Dog-like",
        value: "강아지상",
      },
      {
        label: "Cat-like",
        value: "고양이상",
      },
      {
        label: "Duck-like",
        value: "오리상",
      },
      {
        label: "Rabbit-like",
        value: "토끼상",
      },
      {
        label: "Tofu-like",
        value: "두부상",
      },
      {
        label: "Desert Fox-like",
        value: "사막여우상",
      },
      {
        label: "Hamster-like",
        value: "햄스터상",
      },
      {
        label: "Deer-like",
        value: "사슴상",
      },
      {
        label: "Squirtle-like",
        value: "꼬부기상",
      },
    ],
  },
};

export const FASHION_STYLE: {
  [key: string]: string[];
} = {
  MALE: [
    "미니멀리즘",
    "애슬레저",
    "스트릿",
    "테일러링",
    "보헤미안",
    "유니섹스",
  ],
  FEMALE: ["미니멀리즘", "로맨틱", "스트릿", "레트로", "보헤미안", "프레피"],
};

export const FASHION_STYLE_I18N: {
  [key: string]: {
    [key: string]: {
      label: string;
      value: string;
    }[];
  };
} = {
  ko: {
    MALE: [
      {
        label: "미니멀리즘",
        value: "미니멀리즘",
      },
      {
        label: "애슬레저",
        value: "애슬레저",
      },
      {
        label: "스트릿",
        value: "스트릿",
      },
      {
        label: "테일러링",
        value: "테일러링",
      },
      {
        label: "보헤미안",
        value: "보헤미안",
      },
      {
        label: "유니섹스",
        value: "유니섹스",
      },
    ],

    FEMALE: [
      {
        label: "미니멀리즘",
        value: "미니멀리즘",
      },
      {
        label: "로맨틱",
        value: "로맨틱",
      },
      {
        label: "스트릿",
        value: "스트릿",
      },
      {
        label: "레트로",
        value: "레트로",
      },
      {
        label: "보헤미안",
        value: "보헤미안",
      },
      {
        label: "프레피",
        value: "프레피",
      },
    ],
  },
  en: {
    MALE: [
      {
        label: "Minimalism",
        value: "미니멀리즘",
      },
      {
        label: "Athleisure",
        value: "애슬레저",
      },
      {
        label: "Street",
        value: "스트릿",
      },
      {
        label: "Tailoring",
        value: "테일러링",
      },
      {
        label: "Bohemian",
        value: "보헤미안",
      },
      {
        label: "Unisex",
        value: "유니섹스",
      },
    ],
    FEMALE: [
      {
        label: "Minimalism",
        value: "미니멀리즘",
      },
      {
        label: "Romantic",
        value: "로맨틱",
      },
      {
        label: "Street",
        value: "스트릿",
      },
      {
        label: "Retro",
        value: "레트로",
      },
      {
        label: "Bohemian",
        value: "보헤미안",
      },
      {
        label: "Preppy",
        value: "프레피",
      },
    ],
  },
};

export const FAVORITE_COLOR: string[] = [
  "빨강",
  "주황",
  "노랑",
  "초록",
  "파랑",
  "남색",
  "보라",
  "분홍",
  "검정",
  "흰색",
  "회색",
  "갈색",
];

// 관심사
export const INTEREST: {
  [key: string]: string[];
} = {
  art: ["영화", "콘서트", "뮤지컬", "전시", "출사", "독서"],
  sport: [
    "야구",
    "축구",
    "골프",
    "농구",
    "러닝",
    "헬스",
    "수영",
    "테니스",
    "배드민턴",
    "사이클",
    "탁구",
    "볼링",
    "스키/보드",
    "서핑",
  ],
  experience: [
    "캠핑",
    "드라이브",
    "원데이클래스",
    "낚시",
    "국내여행",
    "해외여행",
    "맛집투어",
  ],
};

export const INTEREST_I18N: {
  [key: string]: {
    [key: string]: {
      label: string;
      value: string;
    }[];
  };
} = {
  ko: {
    art: [
      {
        label: "영화",
        value: "영화",
      },
      {
        label: "콘서트",
        value: "콘서트",
      },
      {
        label: "뮤지컬",
        value: "뮤지컬",
      },
      {
        label: "전시",
        value: "전시",
      },
      {
        label: "출사",
        value: "출사",
      },
      {
        label: "독서",
        value: "독서",
      },
    ],
    sport: [
      {
        label: "야구",
        value: "야구",
      },
      {
        label: "축구",
        value: "축구",
      },
      {
        label: "골프",
        value: "골프",
      },
      {
        label: "농구",
        value: "농구",
      },
      {
        label: "러닝",
        value: "러닝",
      },
      {
        label: "헬스",
        value: "헬스",
      },
      {
        label: "수영",
        value: "수영",
      },
      {
        label: "테니스",
        value: "테니스",
      },
      {
        label: "배드민턴",
        value: "배드민턴",
      },
      {
        label: "사이클",
        value: "사이클",
      },
      {
        label: "탁구",
        value: "탁구",
      },
      {
        label: "볼링",
        value: "볼링",
      },
      {
        label: "스키/보드",
        value: "스키/보드",
      },
      {
        label: "서핑",
        value: "서핑",
      },
    ],
    experience: [
      {
        label: "캠핑",
        value: "캠핑",
      },
      {
        label: "드라이브",
        value: "드라이브",
      },
      {
        label: "원데이클래스",
        value: "원데이클래스",
      },
      {
        label: "낚시",
        value: "낚시",
      },
      {
        label: "국내여행",
        value: "국내여행",
      },
      {
        label: "해외여행",
        value: "해외여행",
      },
      {
        label: "맛집투어",
        value: "맛집투어",
      },
    ],
  },
  en: {
    art: [
      {
        label: "Movie",
        value: "영화",
      },
      {
        label: "Concert",
        value: "콘서트",
      },
      {
        label: "Musical",
        value: "뮤지컬",
      },
      {
        label: "Exhibition",
        value: "전시",
      },
      {
        label: "Photo shoot",
        value: "출사",
      },
      {
        label: "Reading",
        value: "독서",
      },
    ],
    sport: [
      {
        label: "Baseball",
        value: "야구",
      },
      {
        label: "Soccer",
        value: "축구",
      },
      {
        label: "Golf",
        value: "골프",
      },
      {
        label: "Basketball",
        value: "농구",
      },
      {
        label: "Running",
        value: "러닝",
      },
      {
        label: "Health",
        value: "헬스",
      },
      {
        label: "Swimming",
        value: "수영",
      },
      {
        label: "Tennis",
        value: "테니스",
      },
      {
        label: "Badminton",
        value: "배드민턴",
      },
      {
        label: "Cycling",
        value: "사이클",
      },
      {
        label: "Table tennis",
        value: "탁구",
      },
      {
        label: "Bowling",
        value: "볼링",
      },
      {
        label: "Ski/board",
        value: "스키/보드",
      },
      {
        label: "Surfing",
        value: "서핑",
      },
    ],
    experience: [
      {
        label: "Camping",
        value: "캠핑",
      },
      {
        label: "Drive",
        value: "드라이브",
      },
      {
        label: "One-day class",
        value: "원데이클래스",
      },
      {
        label: "Fishing",
        value: "낚시",
      },
      {
        label: "Domestic travel",
        value: "국내여행",
      },
      {
        label: "Overseas travel",
        value: "해외여행",
      },
      {
        label: "Gourmet tour",
        value: "맛집투어",
      },
    ],
  },
};

// 취미
export const HOBBY: {
  [key: string]: string[];
} = {
  SPORT: [
    "축구",
    "야구",
    "농구",
    "배구",
    "탁구",
    "볼링",
    "골프",
    "테니스",
    "수영",
    "요가",
    "필라테스",
  ],
  EXPERIENCE: ["국내여행", "해외여행", "캠핑", "낚시", "드라이브"],
  CRAFT: ["도예", "뜨개질", "코딩", "비즈", "드로잉"],
};

export const KEYWORD_WIKI: {
  [key: string]: string;
} = {
  카리나: "Karina",
  장원영: "Jang Won-young",
  권은비: "Kwon Eun-bi",
  수지: "Suzy",
  강해린: "Kang Hae-rin",
  민지: "Minji",
  한효주: "Han Hyo-joo",
  아이린: "Irene",
  김지원: "Kim Ji-won",
  김채원: "Kim Chae-won",
  아이유: "IU",
  다현: "Dahyun",
  전효성: "Jeon Hyo-sung",
  박보영: "Park Bo-young",
  한예슬: "Han Ye-seul",
  윤승아: "Yoon Seung-ah",
  한가인: "Han Ga-in",
  김태희: "Kim Tae-hee",
  이도현: "Lee Do-hyun",
  진: "Jin",
  윤두준: "Yoon Doo-joon",
  영케이: "Young K",
  뷔: "V",
  현빈: "Hyun Bin",
  주우재: "Ju Woo-jae",
  서강준: "Seo Kang-joon",
  손석구: "Son Seok-gu",
  정국: "Jungkook",
  최우식: "Choi Woo-shik",
  이제훈: "Lee Je-hoon",
  강하늘: "Kang Ha-neul",
  원필: "Wonpil",
  남주혁: "Nam Joo-hyuk",
  차은우: "Cha Eun-woo",
  박보검: "Park Bo-gum",
  송강: "Song Kang",
  남자: "male",
  여자: "female",
  "10대": "10s",
  "20대": "20s",
  "30대": "30s",
  "40대": "40s",
  "50대 이상": "50s",
  "무쌍 실눈": "Monolid Single Eyelid",
  "무쌍 왕눈": "Monolid Double Eyelid",
  "속쌍 실눈": "Inner Double Eyelid",
  "속쌍 왕눈": "Inner Double Eyelid",
  "유쌍 실눈": "Outer Double Eyelid",
  "유쌍 왕눈": "Outer Double Eyelid",
  "170cm 이하": "Under 170cm",
  "171cm ~ 175cm": "171cm ~ 175cm",
  "176cm ~ 180cm": "176cm ~ 180cm",
  "181cm ~ 185cm": "181cm ~ 185cm",
  "186cm 이상": "Over 186cm",
  "155cm 이하": "Under 155cm",
  "156cm ~ 160cm": "156cm ~ 160cm",
  "161cm ~ 165cm": "161cm ~ 165cm",
  "166cm ~ 170cm": "166cm ~ 170cm",
  "171cm 이상": "Over 171cm",
  강아지상: "Dog-like",
  고양이상: "Cat-like",
  공룡상: "Dinosaur-like",
  토끼상: "Rabbit-like",
  두부상: "Tofu-like",
  늑대상: "Wolf-like",
  꼬부기상: "Squirtle-like",
  사슴상: "Deer-like",
  사막여우상: "Desert Fox-like",
  오리상: "Duck-like",
  햄스터상: "Hamster-like",
  미니멀리즘: "Minimalism",
  애슬레저: "Athleisure",
  스트릿: "Street",
  테일러링: "Tailoring",
  보헤미안: "Bohemian",
  유니섹스: "Unisex",
  로맨틱: "Romantic",
  레트로: "Retro",
  프레피: "Preppy",
  영화: "Movie",
  콘서트: "Concert",
  뮤지컬: "Musical",
  전시: "Exhibition",
  출사: "Photo shoot",
  독서: "Reading",
  야구: "Baseball",
  축구: "Soccer",
  골프: "Golf",
  농구: "Basketball",
  러닝: "Running",
  헬스: "Health",
  수영: "Swimming",
  테니스: "Tennis",
  배드민턴: "Badminton",
  사이클: "Cycling",
  탁구: "Table tennis",
  볼링: "Bowling",
  "스키/보드": "Ski/board",
  서핑: "Surfing",
  캠핑: "Camping",
  드라이브: "Drive",
  원데이클래스: "One-day class",
  낚시: "Fishing",
  국내여행: "Domestic travel",
  해외여행: "Overseas travel",
  맛집투어: "Gourmet tour",
  ISTJ: "Realistic, meticulous planner, trustworthy",
  ISFJ: "Quiet, empathetic",
  INFJ: "Creative, intuitive, patient.",
  INTJ: "Logical, intellectual, future-focused.",
  ISTP: "Observant, seeks freedom in relationships",
  ISFP: "Emotional, artistic, Lazy",
  INFP: "Imaginative, romantic, kind.",
  INTP: "Original, innovative, Deep",
  ESTP: "Active, adventurous, fun-loving",
  ESFP: "Bright, sociable, charming",
  ENFP: "Passionate, creative, spontaneous",
  ENTP: "Unique, adventurous, open-minded",
  ESTJ: "Realistic, practical, responsible.",
  ESFJ: "Kind, considerate, values connections.",
  ENFJ: "Empathetic, devoted, considerate.",
  ENTJ: "Strong leadership, goal-oriented, assertive.",
};
