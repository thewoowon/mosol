import styled from "@emotion/styled";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Main>{children}</Main>;
};

export default Container;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  max-width: 375px;
  margin: 0 auto;
`;
