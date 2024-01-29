import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import React from "react";

const Arrow = (props: {
  type: string;
  onClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
}) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  const char =
    props.type === "next" ? <DoubleRightOutlined /> : <DoubleLeftOutlined />;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
};

export default Arrow;
