import styled from "@emotion/styled";

type BottomButtunProps = {
  id?: string;
  onClick: () => void;
  label: string;
  skeleton?: boolean;
};

const BottomButton = ({ id, onClick, label, skeleton }: BottomButtunProps) => {
  return (
    <Button {...(id ? { id } : {})} skeleton={skeleton} onClick={onClick}>
      {label}
    </Button>
  );
};

export default BottomButton;

const Button = styled.button<{
  skeleton?: boolean;
}>`
  width: 100%;
  height: 54px;
  padding: 15px 158px 15px 157px;
  border-radius: 4px;
  background-color: #fa6ee3;
  background-color: ${(props) => (props.skeleton ? "white" : "#fa6ee3")};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  letter-spacing: normal;
  text-wrap: nowrap;

  ${(props) =>
    props.skeleton &&
    `
    border: solid 1px #fa6ee3;
    color: #fa6ee3;
  `}
`;
