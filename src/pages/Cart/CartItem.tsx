import { Button, Divider, Flex, Image, List, Typography } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDataContext } from "../../contexts/ContextDatasProvider";
import { formatCurrency } from "../../Helpers/Common";
import Item, { Meta } from "antd/es/list/Item";
import { BtnCart, BtnPay, TextCart } from "./CartStyle";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const { cartItems, totalPrice, removeCartItem } =
    useDataContext();

  const { Link, Paragraph } = Typography;
  const navigate = useNavigate();

  return (
    <>
      <List
        dataSource={cartItems}
        style={{ display: "flex", alignItems: "center", padding: "0 20px" }}
        renderItem={(item) => (
          <>
            <Item
              style={{ alignItems: "center" }}
              actions={[
                <Button
                  style={{
                    color: "red",
                    border: "none",
                    fontSize: "20px",
                    height: "auto",
                  }}
                  onClick={() => removeCartItem(item.id)}
                >
                  <DeleteFilled />
                </Button>,
              ]}
            >
              <Meta
                style={{ width: "180px", alignItems: "center" }}
                avatar={
                  <Image
                    style={{ cursor: "pointer" }}
                    width={60}
                    src={item.image}
                    preview={false}
                    onClick={() => navigate(`/products/${item.id}`)}
                  />
                }
                title={
                  <Link
                    onClick={() => navigate(`/products/${item.id}`)}
                    style={{
                      width: "120px",
                      display: "block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </Link>
                }
                description={
                  <>
                    <TextCart>Số lượng: {item.qty}</TextCart>
                    <TextCart>
                      Tổng: {formatCurrency(item.qty * item.currentPrice)}
                    </TextCart>
                  </>
                }
              />
            </Item>
          </>
        )}
      >
        <Divider style={{ margin: 0 }} />
        <Paragraph
          style={{
            margin: "14px 0",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Tổng Tiền: {formatCurrency(totalPrice)}
        </Paragraph>
        <Flex vertical align="center">
          <BtnCart onClick={() => navigate('/cart')}>XEM GIỎ HÀNG</BtnCart>
          <BtnPay onClick={() => navigate('/pay')}>THANH TOÁN</BtnPay>
        </Flex>
      </List>
    </>
  );
};

export default CartItem;
