import Typography from "@/components/Typography";
import { FACE_SHAPE } from "@/contants/flow";
import { CommonStepType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

const maleFaceList = [
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/093c30e1-b094-44e8-059f-e04f5b9ae200/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5bfd8833-3aa0-45cf-08d7-167368a1ad00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/867bf0bd-e13e-4fc0-8779-ec4b1fb9d800/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1b8348e0-710c-4c2c-cf9f-456611f2a600/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6fb782af-191f-4c5b-bee1-b5e59f514f00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ba0be0ca-2319-4117-a26b-43409dc3d200/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/47d7d185-e2fc-4d1d-fe35-0b4b6fd69900/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1259ba63-57ac-4831-f320-ccaa79412500/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9fa771ff-b835-403a-7e6c-5d612a70d900/public",
];
const femaleFaceList = [
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0adb95fc-58cf-4d50-fe64-e3d81abb2300/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e44db855-f92a-4a44-0835-0e93b318f900/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/68c9c792-d747-4bef-a411-661f201b2000/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/da1b12ae-67bd-43df-2f84-16348d7baf00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/1fbf792d-d12d-49f6-518e-b74650ed6f00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9e88b109-ae8a-45ee-cac7-ecf312610800/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dcd46903-de2a-4c14-52b8-9b69b5c34900/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/338c1a63-1038-4612-53d8-8bec86f20c00/public",
  "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f6a22c27-3fab-478e-89ae-c1638e40d800/public",
];

const FaceShape = React.forwardRef<HTMLDivElement, CommonStepType>(
  ({ setFlowContext, flowContext }, ref) => {
    return (
      <Container ref={ref}>
        <WidthBlock gap={6}>
          <Typography type="h3">선호하는 얼굴상은?</Typography>
          <Typography type="subtitle1">
            가장 원하는{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              한가지
            </span>
            를 선택해주세요
          </Typography>
        </WidthBlock>
        <WidthHeightBlock>
          <Grid>
            {flowContext.context.sex === "남자"
              ? FACE_SHAPE["FEMALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, faceShape: item },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.faceShape === item
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
                          height: "100px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={femaleFaceList[index]}
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
              : FACE_SHAPE["MALE"].map((item, index) => {
                  return (
                    <Selection
                      key={index}
                      onClick={() => {
                        setFlowContext((prev) => {
                          return {
                            ...prev,
                            context: { ...prev.context, faceShape: item },
                          };
                        });
                      }}
                      selected={
                        flowContext.context &&
                        flowContext.context.faceShape === item
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
                          height: "100px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={maleFaceList[index]}
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

FaceShape.displayName = "FaceShape";

export default FaceShape;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 56px 0 0 0;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  height: 128px;
  border-radius: 4px;
  border: ${(props) =>
    props.selected ? "solid 4px #242729" : "solid 1px #d2d5d6"};
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
  padding: 40px 0 14px 0;
  overflow: auto;
  height: calc(100vh - 378px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
