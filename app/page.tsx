"use client";

import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <div>못해솔로</div>
      <div>
        <button>이런 사람이 좋아</button>
        <button>이런 사람은 안돼</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
