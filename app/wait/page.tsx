"use client";

import { BottomButton } from "@/components/Button";
import Typography from "@/components/Typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WaitPage = () => {
  const router = useRouter();
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Image
          src="/images/svgs/heart.svg"
          alt="못해솔로"
          width={100}
          height={85}
          style={{
            marginBottom: "8px",
          }}
        />
        <Typography type="h3">준비중..</Typography>
        <Typography type="subtitle1" textAlign="center">
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            이런 사람은 안돼
          </span>
          는 준비 중이에요
          <br /> 빠른 시일내에 보여드릴게요 :)
        </Typography>
      </div>
      <Flex flexDirection="column">
        <BottomButton
          onClick={() => {
            // /flow로 이동
            router.push("/flow");
          }}
          label="이런 사람이 좋아 테스트하기"
        />
      </Flex>
    </Container>
  );
};

WaitPage.displayName = "WaitPage";

export default WaitPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
