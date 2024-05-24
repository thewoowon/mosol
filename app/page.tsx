"use client";

import { BottomButton } from "@/components/Button";
import Counter from "@/components/Counter";
import customAxios from "@/lib/axios";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState({
    start: 0,
    end: 0,
  });

  const { data: rankResultData, isLoading } = useQuery({
    queryKey: ["result", "count"],
    queryFn: () => {
      return customAxios({
        method: "GET",
        url: `/result/getResultCount`,
      }).then((res) => res.data);
    },
    refetchInterval: 5000,
    staleTime: 10000,
  });

  useEffect(() => {
    if (rankResultData) {
      if (count.end === 0) {
        setCount({
          start: 0,
          end: rankResultData.data + 10000,
        });
        return;
      } else {
        if (count.end < rankResultData.data + 10000) {
          setCount({
            start: count.end,
            end: rankResultData.data + 10000,
          });
        }
      }
    }
  }, [count.end, rankResultData]);

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
        <div
          style={{
            fontSize: "16px",
            color: "#333333",
            marginBottom: "16px",
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          지금까지
          <span
            style={{
              display: "inline-block",
              color: "#fa6ee3",
              fontWeight: 700,
              width: "60px",
              textAlign: "right",
            }}
          >
            <Counter start={count.start} end={count.end} suffix={""} />
          </span>
          명이 이상형을 찾았어요
        </div>
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
            marginTop: "30px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#333333",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              lineHeight: 1.5,
            }}
          >
            나는 어떤 사람을 좋아할까?
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>상상하던 이상형을 현실로</div>
            <div>Ai가 만들어주는 나만의 이상형 찾기</div>
          </div>
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
          id="not-like-this-person"
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
