import React from "react";
import { CSSTransition } from "react-transition-group";

const Transition = React.forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    inProp: boolean;
    setInProp: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ children, inProp, setInProp }, ref) => {
  return (
    <CSSTransition
      nodeRef={ref}
      in={inProp}
      timeout={400}
      classNames="my-node"
      onEnter={() => setInProp(false)}
    >
      {children}
    </CSSTransition>
  );
});

Transition.displayName = "Transition";

export default Transition;
