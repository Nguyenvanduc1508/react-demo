import React from "react";
import { Card, Col, Image, Row } from "antd";
import { BlogBox, style } from "../Introduce/IntroStyle";
import { useDataContext } from "../../../contexts/ContextDatasProvider";
import { useNavigate } from "react-router-dom";

const Intro: React.FunctionComponent = () => {
  const { Meta } = Card;
  const { blogs } = useDataContext();
  const navigate = useNavigate()

  return (
    <BlogBox>
      <Row gutter={[30, 30]} style={style.mb}>
        {blogs.map((item) => (
          <Col key={item.id} xs={{ span: 5 }} lg={{ span: 8 }}>
            <Card
              hoverable
              onClick={() => navigate(`/blog/${item.id}`)}
              style={style.card}
              cover={<Image alt={item.title} src={item.img} preview={false} />}
            >
              <Meta title={item.title} description={item.desc} />
            </Card>
          </Col>
        ))}
      </Row>
    </BlogBox>
  );
};

export default Intro;
