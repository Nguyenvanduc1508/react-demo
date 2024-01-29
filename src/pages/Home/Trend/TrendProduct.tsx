import { Col, Row } from "antd";
import {
  TrendMen,
  SectionTrend,
  TrendGirl,
  TextGroup,
  Span,
  H2,
  styleTrend,
} from "./StyleTrend";
import { useNavigate } from "react-router-dom";

const TrendProduct = () => {
  const navigate = useNavigate();
  return (
    <SectionTrend>
      <Row style={styleTrend.row} gutter={[30, 30]}>
        <Col
          span={12}
          style={styleTrend.styleBg}
          onClick={() => navigate("./products")}
        >
          <TrendMen>
            <TextGroup>
              <Span>Xu hướng 2019</Span>
              <H2>ĐỒNG HỒ NAM</H2>
            </TextGroup>
          </TrendMen>
        </Col>
        <Col
          span={12}
          style={styleTrend.styleBg}
          onClick={() => navigate("./products")}
        >
          <TrendGirl>
            <TextGroup>
              <Span>Xu hướng 2019</Span>
              <H2>ĐỒNG HỒ NỮ</H2>
            </TextGroup>
          </TrendGirl>
        </Col>
      </Row>
    </SectionTrend>
  );
};

export default TrendProduct;
