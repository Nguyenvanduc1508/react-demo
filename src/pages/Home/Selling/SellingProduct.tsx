import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Flex, Image, Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { CardWrap, FlexItem, style } from "./StyleSelling";
import Meta from "antd/es/card/Meta";
import Arrow from "./Arrow";
import React from "react";
import { useDataContext } from "../../../contexts/ContextDatasProvider";
import { useNavigate } from "react-router-dom";

const SellingProduct: React.FunctionComponent = () => {
  const { Title } = Typography;
  const { datas, addCartItem } = useDataContext();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 1000,
    nextArrow: <Arrow type="next" onClick={undefined} />,
    prevArrow: <Arrow type="prev" onClick={undefined} />,
  };

  return (
    <Flex gap="middle" wrap="wrap" vertical>
      <Layout style={{ backgroundColor: "unset" }}>
        <Content style={style.content}>
          <Title level={1} style={style.title}>
            Sản phẩm bán chạy
          </Title>
          <FlexItem {...settings}>
            {datas
              .filter((item) => {
                return item.status === "selling";
              })
              .map((prod) => (
                <CardWrap
                  key={prod.id}
                  hoverable
                  style={style.cardWrap}
                  cover={<Image preview={false} onClick={() => navigate(`/products/${prod.id}`)} alt={prod.name} src={prod.image} />}
                  actions={[
                    <Button onClick={() => addCartItem(prod)} style={style.bg} type="primary">
                      THÊM VÀO GIỎ
                    </Button>,
                  ]}
                >
                  <Meta title={prod.name} description={prod.currentPrice} />
                </CardWrap>
              ))}
          </FlexItem>
        </Content>
      </Layout>
    </Flex>
  );
};

export default SellingProduct;
