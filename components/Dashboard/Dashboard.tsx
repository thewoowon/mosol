import React from "react";
import styled from "@emotion/styled";

type DashboardProps = {
  type: "male" | "female";
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
        <a
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
        </a>
      )}
    </div>
  );
};

const Dashboard = ({ type }: DashboardProps) => {
  return (
    <Container>
      <MBTI>
        <CommonHeader title="성격" link="/rank/mbti" />
        <Ol>
          <Li>운동</Li>
          <Li>영화</Li>
          <Li>음악</Li>
          <Li>여행</Li>
          <Li>요리</Li>
        </Ol>
      </MBTI>
      <LookLike>
        <CommonHeader title="외모" link="/rank/lookLike" />
        <Grid columns={3}></Grid>
      </LookLike>
      <Height>
        <CommonHeader title="키" />
        <Grid columns={2}></Grid>
      </Height>
      <EyeShape>
        <CommonHeader title="눈매" />
        <Grid columns={2}></Grid>
      </EyeShape>
      <FaceShape>
        <CommonHeader title="얼굴상" link="/rank/faceShape" />
        <Grid columns={3}></Grid>
      </FaceShape>
      <Fashion>
        <CommonHeader title="패션" link="/rank/mbti" />
        <Grid columns={2}></Grid>
      </Fashion>
      <Interest>
        <CommonHeader title="활동" link="/rank/interest" />
        <Ol>
          <Li>운동</Li>
          <Li>영화</Li>
          <Li>음악</Li>
          <Li>여행</Li>
          <Li>요리</Li>
        </Ol>
      </Interest>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
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
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: #f6f6f8;
`;
