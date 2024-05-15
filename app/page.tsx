"use client";

import { BottomButton } from "@/components/Button";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        <Image
          src="/images/svgs/main_logo.svg"
          alt="main"
          width={280}
          height={243}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 16,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          <div>우리가 상상하던 이상형을 현실로</div>
          <div>Ai가 만들어주는 나만의 이상형 찾기</div>
        </div>
      </div>
      <Flex flexDirection="column">
        <BottomButton
          onClick={() => {
            // /flow로 이동
            router.push("/flow");
          }}
          label="이런 사람이 좋아"
        />
        <BottomButton
          skeleton
          onClick={() => {
            // 준비 중입니다.
            router.push("/wait");
          }}
          label="이런 사람은 안돼"
        />
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 56px 16px;
  width: 100%;
  height: 100%;
`;

const Flex = styled.div<{
  flexDirection?: "row" | "column";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;
