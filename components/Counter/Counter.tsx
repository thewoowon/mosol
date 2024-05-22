import React from "react";
import CountUp from "react-countup";

const AnimatedNumber = ({
  start,
  end,
  suffix,
}: {
  start: number;
  end: number;
  suffix: string;
}) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={2}
      separator=","
      suffix={suffix}
    />
  );
};

export default AnimatedNumber;
