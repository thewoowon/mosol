import Typography from "@/components/Typography";
import { FASHION_STYLE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const maleFashionList = [
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/83d4cd17-fcbf-4a6e-fe2c-06bd0b464000/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/948aab7a-cbca-4a34-8b32-37d666182900/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/612fee77-c106-47b8-44b6-33dfdaa68a00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f380d29f-0065-4e58-0f09-7bb476944200/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/648a8fb8-fef1-40c5-1fca-aff2a3d91500/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ce8b0f66-32d8-4bc0-f8f9-6b89ee37fa00/public",
];
const femaleFashionList = [
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/42589fa9-1293-4e1e-138b-8ee68c2fa300/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fcc003bc-9613-435c-bd8e-87c7d6c98800/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/735ddc34-23c9-4140-96cb-884cb21e0c00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ecfd7136-a621-4b75-5247-188bb3001100/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ebb0fae2-38b3-4573-cd16-59ab2427df00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0a383623-d49c-4ac7-3db2-155c80723500/public",
];

const Fashion = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">선호하는 패션스타일은?</Typography>
          <Typography type="subtitle1">
            가장 원하는 한가지를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {flowContext.context.sex === "남자"
              ? FASHION_STYLE["FEMALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, fashion: item },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.fashion === item
                      }
                    >
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
                          src={maleFashionList[index]}
                          alt={item}
                          fill
                          sizes="100%"
                          priority
                          blurDataURL="data:image/jpeg;base64,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"
                        />
                      </div>
                      <div>{item}</div>
                    </Selection>
                  );
                })
              : FASHION_STYLE["MALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, fashion: item },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.fashion === item
                      }
                    >
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
                          src={maleFashionList[index]}
                          alt={item}
                          fill
                          sizes="100%"
                          priority
                          blurDataURL="data:image/jpeg;base64,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"
                        />
                      </div>
                      <div>{item}</div>
                    </Selection>
                  );
                })}
          </Grid>
        </WidthHeightBlock>
      </Container>
    );
  },
);

Fashion.displayName = "Fashion";

export default Fashion;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: auto;
`;

const Selection = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#242729" : "#f5f6f8")};
  cursor: pointer;
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
  color: ${(props) => (props.selected ? "white" : "#242729")};
  gap: 12px;
  overflow: hidden;
`;

const WidthBlock = styled.div<{
  gap?: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.gap || 16}px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d2d5d6;
`;

const WidthHeightBlock = styled.div<{
  gap?: number;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.gap || 16}px;
  overflow-y: auto;
  padding: 40px 0 14px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
