import { Col, Row } from "antd";
import {
  SectionTrend,
  TextGroup,
  Span,
  H2,
  style,
  BG,
} from "./StyleType";
import { useNavigate } from "react-router-dom";

const BannerTypes = () => {
  const navigate = useNavigate();

  const textBanner = [
    {
      title: "CỔ ĐIỂN",
      text: "Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…",
    },
    {
      title: "SMART WATCH",
      text: "Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…",
    },
  ];

  return (
    <SectionTrend>
      <Row style={style.row} gutter={[30, 30]}>
        {textBanner.map((item, index) => (
          <Col
          key={index}
            span={12}
            style={style.styleBg}
            onClick={() => navigate("./products")}
          >
            <BG>
              <TextGroup>
                <H2>{item.title}</H2>
                <Span>{item.text}</Span>
              </TextGroup>
            </BG>
          </Col>
        ))}
      </Row>
    </SectionTrend>
  );
};

export default BannerTypes;
