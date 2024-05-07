import styled from "@emotion/styled";

type BottomButtunProps = {
  onClick: () => void;
  label: string;
};

const BottomButton = ({ onClick, label }: BottomButtunProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default BottomButton;

const Button = styled.button`
  width: 100%;
  height: 54px;
  padding: 15px 158px 15px 157px;
  border-radius: 4px;
  background-color: #fa6ee3;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
`;
