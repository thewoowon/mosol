import React from "react";
import styled from "@emotion/styled";
import { ResultDataType } from "@/types";
import Image from "next/image";
import { getEyeSvg } from "../Step/EyeShape/EyeShape";
import Link from "next/link";

const mbtiMap: {
  [key: string]: string;
} = {
  ISTJ: "친구보다 확실히" + " " + "이성으로 접근하기",
  ISFJ: "어른스럽게 잘 챙겨" + " " + "주면서 밀당 잘하기",
  INFJ: "밝고 예의바르게" + " " + "어른스러운 행동",
  INTJ: "지적이며" + " " + "내면이 단단한 사람",
  ISTP: "너무 귀찮게 안하면서" + " " + "티키타카 잘해주기",
  ISFP: "어른스럽게 행동하고" + " " + "잘 챙겨주기",
  INFP: "깊은 대화를 자주하고" + " " + "아껴주고 공감해주기",
  INTP: "첫인상이 매우 중요하" + " " + "고 애교많은 스타일",
  ESTP: "엄청난 매력쟁이 혹은" + " " + "매우 착한 사람",
  ESFP: "배려심 많고 다정하고" + " " + "잘 챙겨주는 사랑꾼",
  ENFP: "감성적이면서 어른스" + " " + "럽고 잘 이끌어주기",
  ENTP: "잔소리는 절대 금지," + " " + "존중하면서 칭찬하기",
  ESTJ: "여우같은 사람 또는" + " " + "순박한 사랑꾼",
  ESFJ: "반듯하고 선한 행동," + " " + "이야기 공감 잘해주기",
  ENFJ: "속깊고 일 열심히" + " " + "하는 사람, 밀당 금지",
  ENTJ: "한심함 금지, 자기 일" + " " + "알아서 잘하는 사랑꾼",
};

const maleFashionMap: {
  [key: string]: string;
} = {
  미니멀리즘:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/83d4cd17-fcbf-4a6e-fe2c-06bd0b464000/public",
  애슬레저:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/948aab7a-cbca-4a34-8b32-37d666182900/public",
  스트릿:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/612fee77-c106-47b8-44b6-33dfdaa68a00/public",
  테일러링:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f380d29f-0065-4e58-0f09-7bb476944200/public",
  보헤미안:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/648a8fb8-fef1-40c5-1fca-aff2a3d91500/public",
  유니섹스:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ce8b0f66-32d8-4bc0-f8f9-6b89ee37fa00/public",
};

const femaleFashionMap: {
  [key: string]: string;
} = {
  미니멀리즘:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/42589fa9-1293-4e1e-138b-8ee68c2fa300/public",
  로맨틱:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fcc003bc-9613-435c-bd8e-87c7d6c98800/public",
  스트릿:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/735ddc34-23c9-4140-96cb-884cb21e0c00/public",
  레트로:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ecfd7136-a621-4b75-5247-188bb3001100/public",
  보헤미안:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ebb0fae2-38b3-4573-cd16-59ab2427df00/public",
  프레피:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0a383623-d49c-4ac7-3db2-155c80723500/public",
};

const maleFaceMap: {
  [key: string]: string;
} = {
  강아지상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/093c30e1-b094-44e8-059f-e04f5b9ae200/public",
  고양이상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5bfd8833-3aa0-45cf-08d7-167368a1ad00/public",
  공룡상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/867bf0bd-e13e-4fc0-8779-ec4b1fb9d800/public",
  토끼상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1b8348e0-710c-4c2c-cf9f-456611f2a600/public",
  두부상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6fb782af-191f-4c5b-bee1-b5e59f514f00/public",
  늑대상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ba0be0ca-2319-4117-a26b-43409dc3d200/public",
  꼬부기상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/47d7d185-e2fc-4d1d-fe35-0b4b6fd69900/public",
  사슴상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1259ba63-57ac-4831-f320-ccaa79412500/public",
  사막여우상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9fa771ff-b835-403a-7e6c-5d612a70d900/public",
};
const femaleFaceMap: {
  [key: string]: string;
} = {
  강아지상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0adb95fc-58cf-4d50-fe64-e3d81abb2300/public",
  고양이상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e44db855-f92a-4a44-0835-0e93b318f900/public",
  오리상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/68c9c792-d747-4bef-a411-661f201b2000/public",
  토끼상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/da1b12ae-67bd-43df-2f84-16348d7baf00/public",
  두부상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1fbf792d-d12d-49f6-518e-b74650ed6f00/public",
  사막여우상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9e88b109-ae8a-45ee-cac7-ecf312610800/public",
  햄스터상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dcd46903-de2a-4c14-52b8-9b69b5c34900/public",
  사슴상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/338c1a63-1038-4612-53d8-8bec86f20c00/public",
  꼬부기상:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f6a22c27-3fab-478e-89ae-c1638e40d800/public",
};

const lookLikeMap: {
  [key: string]: string;
} = {
  카리나:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/3de3ee46-1a4c-42f1-fcb7-6cb8f4c5f500/public",
  장원영:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6976cbeb-d19f-43cf-22a9-5cd8408b6b00/public",
  권은비:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b52f1322-8f6a-4826-2c21-9dda12cb0c00/public",
  수지: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6d011459-3d3f-4e87-7c02-9e0ed14cb500/public",
  강해린:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ae78925b-720f-4a18-cea8-6a108bb46b00/public",
  민지: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2227894f-3d33-477c-7c6a-608948fbc000/public",
  한효주:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/bc8eb79f-82fb-4880-8b9e-dbaac72ca700/public",
  아이린:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2482c056-51e3-492e-dec5-c48cc8901a00/public",
  김지원:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/29cc53ad-cd0e-435c-790c-e9f7b6240600/public",
  김채원:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6b325c94-c368-4468-8475-6fb12cbf4700/public",
  아이유:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f9c55bfa-2b41-4a00-3992-b142aafecd00/public",
  다현: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2bea5f6a-fa9d-49ca-65d2-70072aa20100/public",

  전효성:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/87a6aeb3-fa6a-414e-c1be-c367ee568300/public",

  박보영:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5952d8c1-82a6-48ec-56ce-0d0b4d1ab400/public",

  한예슬:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3156899-504e-4b8b-c15e-6609c0266d00/public",

  윤승아:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/01495c62-ffd9-4349-5604-4753e4e43900/public",

  한가인:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f8495161-7966-48be-5cbd-8cf08a68a500/public",

  김태희:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dd23fb54-5f6e-493b-d270-0798fb159200/public",

  이도현:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/78f5b96b-22a1-4de5-cf59-ca43c84feb00/public",

  진: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/aff4291a-19bb-4053-ac3e-8d74a0231c00/public",

  윤두준:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e3cbbb1f-bf9d-4bf3-e049-43017861af00/public",

  영케이:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/54b82ec2-116d-4bac-5025-90be2cc74000/public",

  뷔: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/b88e0750-5e2d-4569-ee8e-f4670973bc00/public",

  현빈: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4583f7dd-b91d-463f-6189-6c3202645a00/public",

  주우재:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/19659a44-b541-4ff5-c338-3d8c9ab03100/public",

  서강준:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/31e0b54c-cb2f-45e7-5a63-4c09ea240200/public",

  손석구:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8701064c-e966-43f1-f47a-46cd8a788900/public",

  정국: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/a8352a59-be33-45d9-1617-d6f99d06b500/public",

  최우식:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8c69f560-6ae0-43cb-5886-f8db66315200/public",

  이제훈:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/db6e56aa-898f-4a52-d272-cbad40978600/public",

  강하늘:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/49d04ac6-e351-4d3f-8e16-11f5ffd52100/public",

  원필: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/7bad5034-7185-4ee4-1c98-ae3345367f00/public",

  남주혁:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/d60ac831-5a52-489e-b19b-696729c10e00/public",

  차은우:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/82d088a9-ebb0-4c9c-bcd6-2acfab269d00/public",

  박보검:
    "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/66dee085-ff6d-4b84-97af-c85143028100/public",

  송강: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f203ec00-0d37-4e48-9f31-e2943b141d00/public",
};

type DashboardProps = {
  data: ResultDataType;
  category: string;
  sex: string;
};

const CommonHeader = ({ title, link }: { title: string; link?: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        {title}
      </div>
      {link && (
        <Link
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            textDecoration: "none",
            color: "#333333",
            fontSize: "14px",
          }}
          href={link}
        >
          {"더보기"}
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999999 0.856009L5 4.91775L1 8.97949"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

const DetailDashboard = ({ data, category, sex }: DashboardProps) => {
  return (
    <Container>
      {category === "mbti" && (
        <MBTI>
          <CommonHeader title="성격" />
          <Ol>
            {data.mbtiStatRankData.map((item, index) => {
              return (
                <Li
                  key={index}
                  divider={index < data.mbtiStatRankData.length - 1}
                >
                  <RankNumber isReward={index < 3}>{item.rank}</RankNumber>
                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      border: "solid 1px #d2d5d6",
                      backgroundColor: " #f5f6f8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0px 12px 0 16px",
                      color: "#000000",
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      // overflow는 ...으로 처리
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {mbtiMap[item.category]}
                  </div>
                </Li>
              );
            })}
          </Ol>
        </MBTI>
      )}

      {category === "lookLike" && (
        <LookLike>
          <CommonHeader title="외모" />
          <Grid columns={3}>
            {data.looklikeStatRankData.map((item, index) => {
              return (
                <LookLikeElement key={index}>
                  <RankTag isReward={index < 3}>{index + 1}</RankTag>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    {lookLikeMap[item.category] ? (
                      <Image
                        src={lookLikeMap[item.category]}
                        alt={item.category}
                        fill
                        sizes="100%"
                        priority
                        blurDataURL="data:image/jpeg;base64,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"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        준비중입니다 🤭
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.category}
                  </div>
                </LookLikeElement>
              );
            })}
          </Grid>
        </LookLike>
      )}

      {category === "height" && (
        <Height>
          <CommonHeader title="키" />
          {data.heightStatRankData.length > 0 ? (
            <Grid columns={2}>
              {data.heightStatRankData.map((item, index) => {
                return (
                  <HeightElement key={index}>
                    <RankTag isReward={index < 3}>{index + 1}</RankTag>
                    <div>{item.category}</div>
                  </HeightElement>
                );
              })}
            </Grid>
          ) : (
            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              아직 데이터가 없어요 😅
            </div>
          )}
        </Height>
      )}

      {category === "eyeShape" && (
        <EyeShape>
          <CommonHeader title="눈매" />
          <Grid columns={2}>
            {data.eyeshapeStatRankData.map((item, index) => {
              return (
                <EyeShapeElement key={index}>
                  <RankTag isReward={index < 3}>{index + 1}</RankTag>
                  {getEyeSvg(item.category)}
                  <Divider />
                  <div>{item.category}</div>
                </EyeShapeElement>
              );
            })}
          </Grid>
        </EyeShape>
      )}

      {category === "faceShape" && (
        <FaceShape>
          <CommonHeader title="얼굴상" />
          <Grid columns={3}>
            {data.faceshapeStatRankData.map((item, index) => {
              return (
                <FaceShapeElement key={index}>
                  <RankTag isReward={index < 3}>{index + 1}</RankTag>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={
                        sex === "male"
                          ? item.category in femaleFaceMap
                            ? femaleFaceMap[item.category]
                            : "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e19f3dfc-df95-4709-a0eb-c499aad1dc00/public"
                          : item.category in maleFaceMap
                            ? maleFaceMap[item.category]
                            : "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e19f3dfc-df95-4709-a0eb-c499aad1dc00/public"
                      }
                      alt={item.category}
                      fill
                      sizes="100%"
                      priority
                      blurDataURL="data:image/jpeg;base64,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"
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.category}
                  </div>
                </FaceShapeElement>
              );
            })}
          </Grid>
        </FaceShape>
      )}

      {category === "fashion" && (
        <Fashion>
          <CommonHeader title="패션" />
          <Grid columns={2}>
            {data.fashionStatRankData.map((item, index) => {
              return (
                <FashionElement key={index}>
                  <RankTag isReward={index < 3}>{index + 1}</RankTag>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "172px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={
                        sex === "male"
                          ? item.category in femaleFashionMap
                            ? femaleFashionMap[item.category]
                            : "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e19f3dfc-df95-4709-a0eb-c499aad1dc00/public"
                          : item.category in maleFashionMap
                            ? maleFashionMap[item.category]
                            : "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e19f3dfc-df95-4709-a0eb-c499aad1dc00/public"
                      }
                      alt={item.category}
                      fill
                      sizes="100%"
                      priority
                      blurDataURL="data:image/jpeg;base64,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"
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.category}
                  </div>
                </FashionElement>
              );
            })}
          </Grid>
        </Fashion>
      )}

      {category === "interest" && (
        <Interest>
          <CommonHeader title="활동" />
          <Ol>
            {data.hobbyStatRankData.map((item, index) => {
              return (
                <Li
                  key={index}
                  divider={index < data.hobbyStatRankData.length - 1}
                >
                  <RankNumber isReward={index < 3}>{item.rank}</RankNumber>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      margin: "0px 12px 0 16px",
                    }}
                  >
                    {item.category}
                  </div>
                </Li>
              );
            })}
          </Ol>
        </Interest>
      )}
    </Container>
  );
};

export default DetailDashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MBTI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 16px 16px 30px 16px;
`;

const LookLike = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const Height = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const EyeShape = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const FaceShape = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const Fashion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const Interest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-bottom: 4px solid #f6f6f8;
  padding: 30px 16px;
`;

const Grid = styled.div<{
  columns: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 8px;
  width: 100%;
`;

const Ol = styled.ol`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li<{
  divider?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px 8px;

  ${(props) =>
    props.divider &&
    `
    border-bottom: 1px solid #d2d5d6;
    `}
`;

const RankNumber = styled.div<{
  isReward: boolean;
}>`
  min-width: 28px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isReward ? "#fa6ee3" : "#979797")};
`;

const LookLikeElement = styled.div`
  background-color: #f5f6f8;
  font-size: 14px;
  width: 100%;
  height: 128px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #242729;
  overflow: hidden;
  position: relative;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d2d5d6;
`;

const EyeShapeElement = styled.div`
  background-color: #f5f6f8;
  font-size: 12px;
  width: 100%;
  height: 123px;
  padding: 16px 13px 10px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #242729;
  position: relative;
`;

const FaceShapeElement = styled.div`
  background-color: #f5f6f8;
  font-size: 14px;
  width: 100%;
  height: 128px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #242729;
  overflow: hidden;
  position: relative;
`;

const FashionElement = styled.div`
  background-color: #f5f6f8;
  font-size: 14px;
  width: 100%;
  height: 210px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-family: Pretendard Variable;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #242729;
  overflow: hidden;
  position: relative;
`;

const HeightElement = styled.div`
  background-color: #f5f6f8;
  font-size: 16px;
  width: 100%;
  height: 54px;
  border-radius: 4px;
  border: solid 1px #d2d5d6;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #242729;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RankTag = styled.div<{
  isReward: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  width: 20px;
  height: 20px;
  flex-grow: 0;
  background-color: ${(props) => (props.isReward ? "#fa6ee3" : "#979797")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
