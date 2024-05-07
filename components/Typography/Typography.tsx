import styled from "@emotion/styled";

type TypographyProps = {
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  children: React.ReactNode;
  color?: string;
};

const Typography = ({ type, children, color }: TypographyProps) => {
  return <StyledTypography type={type}>{children}</StyledTypography>;
};

export default Typography;

const StyledTypography = styled.div<{
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  color?: string;
}>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: ${(props) => {
    switch (props.type) {
      case "h1":
        return "64px";
      case "h2":
        return "48px";
      case "h3":
        return "32px";
      case "h4":
        return "24px";
      case "h5":
        return "18px";
      case "h6":
        return "12px";
      case "subtitle1":
        return "16px";
      case "subtitle2":
        return "14px";
      case "body1":
        return "1rem";
      case "body2":
        return "0.875rem";
      case "caption":
        return "0.75rem";
      case "overline":
        return "0.625rem";
      default:
        return "1rem";
    }
  }};
  font-weight: ${(props) => {
    switch (props.type) {
      case "h1":
        return 600;
      case "h2":
        return 600;
      case "h3":
        return 600;
      case "h4":
        return 500;
      case "h5":
        return 500;
      case "h6":
        return 500;
      case "subtitle1":
        return 400;
      case "subtitle2":
        return 500;
      case "body1":
        return 400;
      case "body2":
        return 500;
      case "caption":
        return 400;
      case "overline":
        return 400;
      default:
        return 400;
    }
  }};
  color: ${(props) => props.color || "black"};
`;
