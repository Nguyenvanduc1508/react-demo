import {Image, Layout, Typography } from "antd";
import { BlogType } from "../../../Types/Product.type";
import { BlogText, Div, LayoutDetails } from "./StyleBlog";
import Sider from "antd/es/layout/Sider";
import SiderBlogs from "../../Product/SiderBlogs";
import { Content } from "antd/es/layout/layout";
import { style } from "../../Product/StyleProduct";
import FormHook from "./FormHook";

const Items = ({ infoBLogs }: { infoBLogs: BlogType }) => {
  const { Title, Paragraph } = Typography;
  const styleText = {
    fontSize: "16px",
  };
  return (
    <LayoutDetails>
      <Layout style={style.styleLayout}>
        <Sider
          style={{
            background: "#fff",
            marginRight: "30px",
            paddingRight: "30px",
            borderRight: "1px solid #ccc",
          }}
          width="320px"
        >
          <SiderBlogs />
        </Sider>
        <Content
          style={{
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          <Image
            preview={false}
            width="100%"
            src={infoBLogs.img}
            alt={infoBLogs.day}
          />
          <BlogText>
            <Title level={3}>{infoBLogs.title}</Title>
            <Paragraph style={styleText}>{infoBLogs.text_1}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_2}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_3}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_4}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_5}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_6}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_7}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_8}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_9}</Paragraph>
            <Paragraph style={styleText}>{infoBLogs.text_10}</Paragraph>
            <Div>
              <Title level={4}>Trả lời</Title>
              <Paragraph style={{fontSize: '18px'}}>
                Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                buộc được đánh dấu *
              </Paragraph>

              <FormHook />
            </Div>
          </BlogText>
        </Content>
      </Layout>
    </LayoutDetails>
  );
};

export default Items;
