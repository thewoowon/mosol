export const SEX_ITEMS: string[] = ["남자", "여자"];

export const AGE_RANGE: string[] = [
  "10대",
  "20대",
  "30대",
  "40대",
  "50대 이상",
];

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

export const LOOK_LIKE: {
  [key: string]: {
    name: string;
    description: string;
    src: string;
  }[];
} = {
  MALE: [
    {
      name: "카리나",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3de3ee46-1a4c-42f1-fcb7-6cb8f4c5f500/public",
    },
    {
      name: "장원영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6976cbeb-d19f-43cf-22a9-5cd8408b6b00/public",
    },
    {
      name: "권은비",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b52f1322-8f6a-4826-2c21-9dda12cb0c00/public",
    },
    {
      name: "수지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6d011459-3d3f-4e87-7c02-9e0ed14cb500/public",
    },
    {
      name: "강해린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ae78925b-720f-4a18-cea8-6a108bb46b00/public",
    },
    {
      name: "민지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2227894f-3d33-477c-7c6a-608948fbc000/public",
    },
    {
      name: "한효주",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/bc8eb79f-82fb-4880-8b9e-dbaac72ca700/public",
    },
    {
      name: "아이린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2482c056-51e3-492e-dec5-c48cc8901a00/public",
    },
    {
      name: "김지원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/29cc53ad-cd0e-435c-790c-e9f7b6240600/public",
    },
    {
      name: "김채원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6b325c94-c368-4468-8475-6fb12cbf4700/public",
    },
    {
      name: "아이유",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f9c55bfa-2b41-4a00-3992-b142aafecd00/public",
    },
    {
      name: "다현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2bea5f6a-fa9d-49ca-65d2-70072aa20100/public",
    },
    {
      name: "전효성",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/87a6aeb3-fa6a-414e-c1be-c367ee568300/public",
    },
    {
      name: "박보영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5952d8c1-82a6-48ec-56ce-0d0b4d1ab400/public",
    },
    {
      name: "한예슬",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3156899-504e-4b8b-c15e-6609c0266d00/public",
    },
    {
      name: "윤승아",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/01495c62-ffd9-4349-5604-4753e4e43900/public",
    },
    {
      name: "한가인",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f8495161-7966-48be-5cbd-8cf08a68a500/public",
    },
    {
      name: "김태희",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dd23fb54-5f6e-493b-d270-0798fb159200/public",
    },
  ],
  FEMALE: [
    {
      name: "이도현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a232bdb1-dd8f-4750-c955-7c5f30728b00/public",
    },
    {
      name: "진",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/aff4291a-19bb-4053-ac3e-8d74a0231c00/public",
    },
    {
      name: "윤두준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3cbbb1f-bf9d-4bf3-e049-43017861af00/public",
    },
    {
      name: "영케이",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/54b82ec2-116d-4bac-5025-90be2cc74000/public",
    },
    {
      name: "뷔",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b88e0750-5e2d-4569-ee8e-f4670973bc00/public",
    },
    {
      name: "현빈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4583f7dd-b91d-463f-6189-6c3202645a00/public",
    },
    {
      name: "주우재",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/19659a44-b541-4ff5-c338-3d8c9ab03100/public",
    },
    {
      name: "서강준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/31e0b54c-cb2f-45e7-5a63-4c09ea240200/public",
    },
    {
      name: "손석구",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8701064c-e966-43f1-f47a-46cd8a788900/public",
    },
    {
      name: "정국",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a8352a59-be33-45d9-1617-d6f99d06b500/public",
    },
    {
      name: "최우식",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8c69f560-6ae0-43cb-5886-f8db66315200/public",
    },
    {
      name: "이제훈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/db6e56aa-898f-4a52-d272-cbad40978600/public",
    },
    {
      name: "강하늘",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/49d04ac6-e351-4d3f-8e16-11f5ffd52100/public",
    },
    {
      name: "원필",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/7bad5034-7185-4ee4-1c98-ae3345367f00/public",
    },
    {
      name: "남주혁",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d60ac831-5a52-489e-b19b-696729c10e00/public",
    },
    {
      name: "차은우",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/82d088a9-ebb0-4c9c-bcd6-2acfab269d00/public",
    },
    {
      name: "박보검",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/66dee085-ff6d-4b84-97af-c85143028100/public",
    },
    {
      name: "송강",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f203ec00-0d37-4e48-9f31-e2943b141d00/public",
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

export const EYES_TYPE: string[] = [
  "무쌍 실눈",
  "무쌍 왕눈",
  "속쌍 실눈",
  "속쌍 왕눈",
  "유쌍 실눈",
  "유쌍 왕눈",
];

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
