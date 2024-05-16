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
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a17ee285-c6d3-4308-224f-22185697f800/public",
    },
    {
      name: "장원영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/206e12ec-63a8-4216-b902-08b527d1e200/public",
    },
    {
      name: "권은비",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fd2ce4d0-325a-49fe-41f8-723949081e00/public",
    },
    {
      name: "수지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ebcefc70-1b66-4dab-0ca5-f7708e996000/public",
    },
    {
      name: "강혜린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d86d7f2a-b1bb-4216-a9dc-80fbbbb7d800/public",
    },
    {
      name: "민지",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d6596b0e-b551-4650-0889-e6cf6f53bc00/public",
    },
    {
      name: "한효주",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/41745fff-75e7-46d1-b067-69861860d100/public",
    },
    {
      name: "아이린",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ad791db6-0578-465b-e4f1-7ac74178d600/public",
    },
    {
      name: "김지원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/595b04e7-4e4b-47a6-cfd7-54d3554a0b00/public",
    },
    {
      name: "김채원",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/13c8c1ec-4e64-4c1b-d85f-67d2ceb02b00/public",
    },
    {
      name: "아이유",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3dc2718b-66ca-4bc1-100e-d6594a24c100/public",
    },
    {
      name: "다현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ad6ca952-2e92-483a-183e-0a3dbf02f400/public",
    },
    {
      name: "전효성",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d5fcd6b4-0196-4f57-ecbb-f8636b5d7e00/public",
    },
    {
      name: "박보영",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b63e7289-62f9-4699-b80e-76ffa2ccdd00/public",
    },
    {
      name: "한예슬",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/21615163-dbf0-4c43-01eb-4dcf38094a00/public",
    },
    {
      name: "윤승아",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/12542911-c5d6-4ebd-97aa-5bcb95ee8300/public",
    },
    {
      name: "한가인",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/40f6436c-945d-4154-98a1-c0415377e800/public",
    },
    {
      name: "김태희",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/46ea0a4c-7cf7-4ee4-8c5d-96cdc0481200/public",
    },
  ],
  FEMALE: [
    {
      name: "이도현",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/78f5b96b-22a1-4de5-cf59-ca43c84feb00/public",
    },
    {
      name: "진",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b1687050-df19-45c5-9d83-27ff81dff300/public",
    },
    {
      name: "윤두준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3c774b3f-3754-4b1d-e8b9-e1a394d42200/public",
    },
    {
      name: "영케이",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a5c6a2a7-eb77-4dda-cb71-c217a0593600/public",
    },
    {
      name: "뷔",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/09fcbb1b-6e8b-4863-06cd-c0a0e9ecfa00/public",
    },
    {
      name: "현빈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8d915a68-f887-4ef6-5f59-b9b2fe323700/public",
    },
    {
      name: "주우재",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/28ee7540-8ead-44c1-d99f-d41f98486300/public",
    },
    {
      name: "서강준",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a6de261c-ec00-412a-83f2-c9e4646eee00/public",
    },
    {
      name: "손석구",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/acfead32-c4e1-44fa-6d9f-f989af9fb300/public",
    },
    {
      name: "정국",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e5f4c675-cd08-4d07-089b-f80146a0f700/public",
    },
    {
      name: "최우식",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/034f58a4-dc50-4252-0278-90de0ef56600/public",
    },
    {
      name: "이제훈",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/07399d26-3c49-4239-c15e-055d1a4cbf00/public",
    },
    {
      name: "강하늘",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3d9ade94-9136-4f95-cd78-ab5377977700/public",
    },
    {
      name: "원필",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/efdf64cb-9e17-4218-ae5b-fe956d28b900/public",
    },
    {
      name: "남주혁",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/c3bb77d4-c3f4-4fdc-b585-675e4369d400/public",
    },
    {
      name: "차은우",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/107304a2-017c-462f-fca6-8529652a0700/public",
    },
    {
      name: "박보검",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a26b584a-32ba-43c3-b360-5cf6c3f4ef00/public",
    },
    {
      name: "송강",
      description: "송강이란 무엇인가",
      src: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/11425fd7-fb28-4969-749e-1930b0f4fa00/public",
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
