import { memo, useEffect, useState } from "react";
import { Layout, Row, Typography } from "antd";
import { BlogType } from "../../Types/Product.type";
import axios from "axios";
import { style } from "../Product/StyleProduct";
import SiderBlogs from "../Product/SiderBlogs";
import BlogItem from "./BlogItem";

const Blogs = () => {
  const { Content, Sider } = Layout;
  const [blog, setBlogs] = useState<BlogType[]>([]);
  const { Title } = Typography;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog");
        setBlogs(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Layout style={{ background: "unset", margin: "40px auto" }}>
      <Title style={{ textAlign: "center" }} level={3}>
        Blogs
      </Title>
      <Content style={style.styleContent}>
        <Layout style={style.styleLayout}>
          <Sider style={{ background: "#fff" }} width="280px">
            <SiderBlogs />
          </Sider>
          <Content style={{ paddingLeft: "30px" }}>
            <Row gutter={[16, 0]}>
              <BlogItem blog={blog} />
            </Row>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default memo(Blogs);
