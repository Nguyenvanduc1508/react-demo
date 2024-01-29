import React from "react";
import { Category, Div } from "./StyleProduct";
import { Avatar, List, Typography } from "antd";
import { useDataContext } from "../../contexts/ContextDatasProvider";
import { useNavigate } from "react-router-dom";

const SiderBlogs: React.FunctionComponent = () => {
  const { Title, Paragraph } = Typography;
  const { blogs } = useDataContext();
  const navigate = useNavigate()

  return (
    <Div>
      <Title level={3}>BÀI VIẾT MỚI NHẤT</Title>
      <Category>
        <List
          itemLayout="horizontal"
          dataSource={blogs}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                    src={item.img}
                  />
                }
                title={<Paragraph onClick={() => navigate(`/blog/${item.id}`)}>{item.title}</Paragraph>}
              />
            </List.Item>
          )}
        />
      </Category>
    </Div>
  );
};

export default SiderBlogs;
