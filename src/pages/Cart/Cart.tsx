import { Button, Divider, Flex, Image, Layout, Table, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useDataContext } from "../../contexts/ContextDatasProvider";
import { FunctionComponent } from "react";
import {
  CaretLeftOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Link } from "../Contact/StyleContact";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Helpers/Common";
import { BtnBackProduct, BtnReset, Subtotal } from "./CartStyle";

const Cart: FunctionComponent = () => {
  const {
    cartQty,
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeCartItem,
    clearCart
  } = useDataContext();
  const { Column } = Table;
  const { Paragraph } = Typography;
  const navigate = useNavigate();
  return (
    <Layout
      style={{ maxWidth: "1200px", margin: "50px auto 0", background: "unset" }}
    >
      <Sider width={"60%"} style={{ background: "unset", padding: "0 30px" }}>
        <Table pagination={false} dataSource={cartItems} rowKey="name">
          <Column
            title="SẢN PHẨM"
            render={(item) => (
              <Flex align="center">
                <CloseCircleOutlined
                  style={{
                    color: "red",
                    border: "none",
                    fontSize: "20px",
                    height: "auto",
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                  onClick={() => removeCartItem(item.id)}
                />
                <Image width={60} preview={false} src={item.image} />
                <Link
                  onClick={() => navigate(`/products/${item.id}`)}
                  style={{
                    marginLeft: 30,
                    width: "170px",
                    display: "block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </Link>
              </Flex>
            )}
          />
          <Column
            title="GIÁ"
            render={(item) => formatCurrency(item.currentPrice)}
          />
          <Column
            title="SỐ LƯỢNG"
            render={(item) => (
              <Flex align="center">
                <Button onClick={() => decreaseQty(item.id)}>-</Button>
                <Paragraph
                  style={{
                    padding: "4px 10px",
                    borderRadius: "5px",
                    marginBottom: 0,
                    border: "1px solid #ddd",
                  }}
                >
                  {item.qty}
                </Paragraph>
                <Button onClick={() => increaseQty(item.id)}>+</Button>
              </Flex>
            )}
          />
          <Column
            title="TỔNG"
            render={(item) => formatCurrency(item.qty * item.currentPrice)}
          />
        </Table>
        <Flex style={{ margin: "20px 0" }}>
          <BtnBackProduct onClick={() => navigate('/products')} >
            <CaretLeftOutlined /> TIẾP TỤC XEM SẢN PHẨM
          </BtnBackProduct>
          <BtnReset onClick={() => clearCart()}>XÓA TẤT CẢ</BtnReset>
        </Flex>
      </Sider>
      <Content
        style={{
          padding: "0 24px",
          borderLeft: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <Paragraph style={{ fontWeight: "600", marginBottom: 0 }}>
          GIAO HÀNG
        </Paragraph>
        <Divider />
        <Flex align="center" justify="space-between">
          <Paragraph style={{ marginBottom: 0 }}>Số lượng</Paragraph>
          <Subtotal>{cartQty} Sản phẩm</Subtotal>
        </Flex>
        <Divider />
        <Flex align="center" justify="space-between">
          <Paragraph style={{ marginBottom: 0 }}>Giao hàng</Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>Giao hàng miễn phí</Paragraph>
        </Flex>
        <Divider />
        <Flex align="center" justify="space-between">
          <Paragraph style={{ marginBottom: 0 }}>Tổng phụ</Paragraph>
          <Subtotal>{formatCurrency(totalPrice)}</Subtotal>
        </Flex>
        <Divider />
        <Button
          size="large"
          style={{
            width: "100%",
            margin: "10px 0",
            borderRadius: "unset",
            background: "#d26e4b",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            display: "block",
          }}
          onClick={() => navigate('/pay')}
        >
          TIẾN HÀNH THANH TOÁN
        </Button>
      </Content>
    </Layout>
  );
};

export default Cart;
