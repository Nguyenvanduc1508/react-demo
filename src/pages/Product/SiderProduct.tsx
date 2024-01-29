import React from "react";
import { Category, Div } from "./StyleProduct";
import { Image, List, Typography } from "antd";
import { useDataContext } from "../../contexts/ContextDatasProvider";
import { useNavigate } from "react-router-dom";

const SiderProduct: React.FunctionComponent = () => {
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();
  const { datas } = useDataContext();

  return (
    <Div>
      <Title level={3}>SẢN PHẨM BÁN CHẠY</Title>
      <Category>
        <List
          itemLayout="horizontal"
          dataSource={datas.filter((items) => items.status === "selling")}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    style={{ width: "60px" }}
                    preview={false}
                    src={item.image}
                  />
                }
                title={
                  <Paragraph
                    style={{
                      width: "170px",
                      display: "block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      marginBottom: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    {item.name}
                  </Paragraph>
                }
                description={item.currentPrice}
              />
            </List.Item>
          )}
        />
      </Category>
    </Div>
  );
};

export default SiderProduct;
