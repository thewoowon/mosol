import styled from "@emotion/styled";

const ProgressBar = ({ gauge }: { gauge: number }) => {
  return (
    <Wrapper>
      <Gauge gauge={gauge} />
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  flex: 1;
  height: 4px;
  background-color: #f5f6f8;
  position: relative;
  border-radius: 5px;
`;

const Gauge = styled.div<{ gauge: number }>`
  width: ${(props) => props.gauge}%;
  height: 100%;
  background-color: #242729;
  position: absolute;
  transition: width 0.5s;
  border-radius: 5px;
`;
