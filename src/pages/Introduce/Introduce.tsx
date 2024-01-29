import { Col, Flex, Image, Row, Typography } from "antd";
import bg from "../../assets/bg/about-us_bg.jpg";
import { aboutIntro, arrayIntro } from "./DataIntro";
import Counter from "./Counter";
import { Parallax } from "react-parallax";
import paralax from "../../assets/bg/paralax-bg.jpg";
import { ColorDark, styleItalic, styleRow } from "./IntroStyle";

const Introduce = () => {
  const { Title, Paragraph } = Typography;
  return (
    <Flex style={{ margin: "60px auto 0" }} vertical>
      <Row style={styleRow} gutter={[30, 30]}>
        <Col span={12}>
          <Image preview={false} src={bg} alt="background" />
        </Col>
        <Col span={12}>
          <Title style={{ fontSize: "40px", fontWeight: "bold" }} level={2}>
            Giới thiệu về Watch Mona
          </Title>
          <Paragraph style={{ fontSize: "16px", fontWeight: "500" }}>
            “Cùng với sự phát triển không ngừng của thời trang thế giới, rất
            nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
            dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ
            nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến
            phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện
            thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay.
            Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho
            một chiếc đồng hồ nam cao cấp.”
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[30, 30]} style={styleRow}>
        {arrayIntro.map((item, index) => (
          <Col span={8} key={index}>
            <Flex>
              <Col style={{ padding: "0" }}>
                <Image preview={false} src={item.img} width={60} />
              </Col>
              <Col>
                <Title level={4}>{item.title}</Title>
                <Paragraph style={{ fontSize: "16px" }}>{item.desc}</Paragraph>
              </Col>
            </Flex>
          </Col>
        ))}
      </Row>
      <Parallax
        bgImage={paralax}
        strength={350}
        style={{ marginBottom: "100px" }}
      >
        <ColorDark>
          <Flex
            style={{
              height: 260,
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <Counter />
          </Flex>
        </ColorDark>
      </Parallax>

      <Row gutter={[30, 30]} style={{
        maxWidth: "1200px",
        alignItems: "center",
        margin: "0 auto",
      }}>
        {aboutIntro.map((item, index) => (
          <Col style={{ textAlign: "center" }} span={8} key={index}>
            <Image
              preview={false}
              src={item.img}
              width={100}
              style={{ marginBottom: 20 }}
            />
            <Paragraph style={{ fontSize: "16px", fontStyle: "italic" }}>
              {item.desc}
            </Paragraph>
            <Title style={styleItalic} level={4}>
              {item.name}
            </Title>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Introduce;
