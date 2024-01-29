import { Col, Typography } from "antd";
import CountUp from "react-countup";
import { styleCount } from "./IntroStyle";
import { countUp } from "./DataIntro";

type Counter = {
  number: number;
  title: string;
};

export default function Counter() {
  const { Paragraph } = Typography;
  
  return (
    <>
      {countUp.map((item, index) => (
        <Col
          key={index}
          span={6}
          style={{ textAlign: "center", color: "#fff" }}
          className="number"
        >
          <CountUp
            duration={1}
            style={{ fontSize: "40px", fontWeight: "bold" }}
            end={item.number}
          />
          <Paragraph style={styleCount}>{item.title}</Paragraph>
        </Col>
      ))}
    </>
  );
}
