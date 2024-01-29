import { memo, useEffect, useState } from "react";
import { Breadcrumb, Layout, Row, Typography } from "antd";
import { Category, CategoryItem, Div, style } from "./StyleProduct";
import SiderProduct from "./SiderProduct";
import SiderBlogs from "./SiderBlogs";
import { HomeOutlined } from "@ant-design/icons";
import { useDataContext } from "../../contexts/ContextDatasProvider";
import { Products } from "../../Types/Product.type";
import ProductList from "./ProductList";
import axios from "axios";

const Product = () => {
  const { Content, Sider } = Layout;
  const { Title } = Typography;
  const { datas } = useDataContext();
  const [prods, setProds] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        setProds(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);

  const category = ["Tất Cả", "Đồng Hồ Nữ", "Đồng Hồ Nam"];

  const showCategory = (list: string) => {
    if (list === "Tất Cả") {
      setProds(datas);
    } else {
      const result = datas.filter((item) => {
        return item.sex === list;
      });
      setProds(result);
    }
  };

  return (
    <Layout style={{ background: "unset" }}>
      <Content style={style.styleContent}>
        <Breadcrumb
          style={style.styleBreadcrumb}
          items={[
            {
              href: "/",
              title: <HomeOutlined style={style.iconStyle} />,
            },
            {
              title: "ĐỒNG HỒ NAM",
            },
          ]}
        />
        <Layout style={style.styleLayout}>
          <Sider style={{ background: "#fff" }} width="280px">
            <Div>
              <Title level={3}>DANH MỤC SẢN PHẨM</Title>
              <Category>
                {category.map((item, index) => (
                  <CategoryItem key={index} onClick={() => showCategory(item)}>
                    {item}
                  </CategoryItem>
                ))}
              </Category>
            </Div>
            <SiderProduct />
            <SiderBlogs />
          </Sider>
          <Content style={{ paddingLeft: "30px" }}>
            <Row gutter={[16, 0]}>
              <ProductList data={prods} />
            </Row>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default memo(Product);
