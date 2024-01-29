import { Breadcrumb, Button, Col, Divider, Image, Row, Typography } from "antd";
import { Products } from "../../../Types/Product.type";
import { LayoutDetails } from "./DetailsStyles";
import { useDataContext } from "../../../contexts/ContextDatasProvider";
import SellingProduct from "../../Home/Selling/SellingProduct";

const Info = ({ details }: { details: Products }) => {
  const { Title, Paragraph } = Typography;
  const { addCartItem } = useDataContext();

  return (
    <LayoutDetails>
      <Row gutter={30}>
        <Col span={12}>
          <Image src={details.image} />
        </Col>
        <Col span={12}>
          <Breadcrumb
            style={{ marginBottom: "15px" }}
            items={[
              {
                title: "TRANG CHỦ",
              },
              {
                title: "POPULAR",
              },
            ]}
          />
          <Title
            level={3}
            style={{
              marginBottom: "20px",
              paddingBottom: "20px",
              fontSize: "28px",
            }}
          >
            {details.name}
          </Title>
          <Paragraph style={{ fontSize: "25px", fontWeight: "bold" }}>
            {details.currentPrice}$
          </Paragraph>
          <Paragraph style={{ fontSize: "16px" }}>{details.desc}</Paragraph>
          <Button
            onClick={() => addCartItem(details)}
            style={{ backgroundColor: "#c89979", marginBottom: "15px" }}
            type="primary"
          >
            THÊM VÀO GIỎ
          </Button>
          <Title level={4}>Mô tả</Title>
          <Paragraph style={{ fontSize: "16px" }}>{details.describe}</Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row style={{ justifyContent: "center" }}>
        <SellingProduct />
      </Row>
    </LayoutDetails>
  );
};

export default Info;
