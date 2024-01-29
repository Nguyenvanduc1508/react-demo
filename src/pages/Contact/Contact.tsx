import Iframe from "react-iframe";
import {
    Button,
  DivContact,
  Link,
  WrapForm,
  iconBox,
  styleInput,
  styleText,
  styleTitle,
} from "./StyleContact";
import { Col, Image, Input, Row, Typography } from "antd";
import icon1 from "../../assets/contact/1.svg";
import icon2 from "../../assets/contact/2.svg";
import icon3 from "../../assets/contact/3.svg";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  const { Title, Paragraph } = Typography;
  return (
    <DivContact>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478791335196!2d106.65261921472937!3d10.77696826213081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng+ty+TNHH+-+MONA+MEDIA!5e0!3m2!1svi!2s!4v1524639789314"
        width="100%"
        height="430px"
        id=""
        className=""
        display="block"
        position="relative"
      />
      <Row style={{ margin: "60px 0" }}>
        <Col span={8}>
          <Row>
            <Col style={iconBox}>
              <Image width={22} src={icon1} />
            </Col>
            <Col>
              <Title style={styleTitle} level={4}>
                Địa chỉ:
              </Title>
              <Paragraph style={styleText}>
                319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col style={iconBox}>
              <Image width={22} src={icon2} />
            </Col>
            <Col>
              <Title style={styleTitle} level={4}>
                Điện thoại:
              </Title>
              <Col>
                <Link href="tel:1900 636 648">1900 636 648</Link>
                <Col>
                  <Paragraph style={styleText}>
                    Bấm 109 – Phòng kinh doanh
                  </Paragraph>
                  <Paragraph style={styleText}>
                    Bấm 103 – Phòng kỹ thuật
                  </Paragraph>
                </Col>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col style={iconBox}>
              <Image width={22} src={icon3} />
            </Col>
            <Col>
              <Title style={styleTitle} level={4}>
                Email:
              </Title>
              <Link href="tel:1900 636 648" style={{ fontWeight: "unset" }}>
                demonhunterg@gmail.com
              </Link>
              <Link href="tel:1900 636 648" style={{ fontWeight: "unset" }}>
                demonhunterg@gmail.com
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <form>
        <WrapForm>
          <Row style={{ marginBottom: "15px" }} gutter={15}>
            <Col span={12}>
              <Input style={styleInput} type="text" placeholder="Họ và tên" />
            </Col>
            <Col span={12}>
              <Input style={styleInput} type="text" placeholder="Email" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }} gutter={15}>
            <Col span={12}>
              <Input
                style={styleInput}
                type="text"
                placeholder="Số điện thoại"
              />
            </Col>
            <Col span={12}>
              <Input style={styleInput} type="text" placeholder="Địa chỉ" />
            </Col>
          </Row>
          <Row gutter={[15, 15]} style={{ marginBottom: "15px" }}>
            <Col span={24}>
              <TextArea placeholder="Lời nhắn" style={styleInput} rows={5} />
            </Col>
          </Row>
          <Row>
            <Button type="submit">Gửi</Button>
          </Row>
        </WrapForm>
      </form>
    </DivContact>
  );
};

export default Contact;
