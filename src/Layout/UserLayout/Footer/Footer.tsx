import { FooterBg, FooterWrap, TitleFoodter, Div, style } from "./StyleFooter";
import { FooterLinkGroup, FooterTitle, FooterLink } from "flowbite-react";
import Ggplay from "../../../assets/bg/img-googleplay.jpg";
import Appstore from "../../../assets/bg/img-appstore.jpg";
import { Button, Col, Image, Row, Typography } from "antd";
import {
  EnvironmentOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";

const Footer = () => {
  const { Text, Title } = Typography;

  const linkCol = [
    { name: "Giới Thiệu", link: "#" },
    { name: "Đồng Hồ Nữ", link: "#" },
    { name: "Đồng Hồ Nam", link: "#" },
    { name: "Blogs", link: "#" },
    { name: "Liên Hệ", link: "#" },
  ];

  const spCol = [
    { name: "Hướng Dẫn Mua Hàng", link: "#" },
    { name: "Hướng Dẫn Thanh Toán", link: "#" },
    { name: "Chính Sách Bảo Hành", link: "#" },
    { name: "Chính Sách Đổi Trả", link: "#" },
    { name: "Tư Vấn Khách Hàng", link: "#" },
  ];

  return (
    <>
      <Row style={style.rowSearch}>
        <Col span={12}>
          <Title level={2} style={style.h2}>
            ĐĂNG KÝ NHẬN THÔNG TIN
          </Title>
        </Col>
        <Col span={12} style={style.colSearch}>
          <Search
            placeholder="Email..."
            style={style.search}
            allowClear
            enterButton={<Button style={style.bthSearch}>ĐĂNG KÝ</Button>}
            size="large"
          />
        </Col>
      </Row>
      <FooterBg>
        <FooterWrap>
          <Row gutter={[16, 16]} style={{ margin: "30px 0" }}>
            <Col span={6}>
              <TitleFoodter>THÔNG TIN LIÊN HỆ</TitleFoodter>
              <FooterLinkGroup col style={{ rowGap: 0 }}>
                <FooterLink href="#" style={style.linkStyle}>
                  <EnvironmentOutlined style={style.iconStyle} />
                  319 C16 Lý Thường Kiệt, Phường 15,
                  <br />
                  Quận 11, Tp.HCM
                </FooterLink>
                <FooterLink href="#" style={style.linkStyle}>
                  <PhoneOutlined style={style.iconStyle} />
                  076 922 0162
                </FooterLink>
                <Div style={style.linkStyle}>
                  <GooglePlusOutlined style={style.iconStyle} />
                  <Text>
                    <FooterLink href="#" style={style.colorWhite}>
                      demonhunterg@gmail.com
                    </FooterLink>
                    <FooterLink href="#" style={style.colorWhite}>
                      mon@mona.media
                    </FooterLink>
                  </Text>
                </Div>
                <FooterLink href="#" style={style.linkStyle}>
                  <TwitterOutlined style={style.iconStyle} />
                  demonhunterp
                </FooterLink>
              </FooterLinkGroup>
            </Col>
            <Col span={6}>
              <FooterTitle style={style.styTitle} title="LIÊN KẾT" />
              <FooterLinkGroup col>
                {linkCol.map((item, index) => (
                  <FooterLink
                    key={index}
                    style={style.styleLink}
                    href={item.link}
                  >
                    {item.name}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </Col>
            <Col span={6}>
              <FooterTitle style={style.styTitle} title="HỖ TRỢ" />
              <FooterLinkGroup col>
                {spCol.map((item, index) => (
                  <FooterLink
                    key={index}
                    style={style.styleLink}
                    href={item.link}
                  >
                    {item.name}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </Col>
            <Col span={6}>
              <TitleFoodter>TẢI ỨNG DỤNG TRÊN</TitleFoodter>
              <Text style={style.colorWhite}>
                Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store.
                Tải nó ngay.
              </Text>
              <FooterLinkGroup>
                <FooterLink href="#">
                  <Image
                    style={style.styleImage}
                    src={Ggplay} preview={false}
                    alt="google play"
                  />
                  <Image src={Appstore} preview={false} alt="app store" />
                </FooterLink>
              </FooterLinkGroup>
            </Col>
          </Row>
        </FooterWrap>
      </FooterBg>
    </>
  );
};

export default Footer;
