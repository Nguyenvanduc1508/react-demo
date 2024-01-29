import { Carousel } from "antd";
import 'animate.css';
import {
  Box,
  BoxLeft,
  Button,
  CarouselItem,
  CarouselItem2,
  H2,
  H4,
  P,
} from "./SliderStyle";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/products");
  };
  const sliderText = {
    span: "Mona Watch",
    title: "Đồng hồ Classico",
    desc: "Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…",
  };

  return (
    <Carousel autoplay dots={false}>
      <CarouselItem>
        <BoxLeft>
          <Box>
            <H4>{sliderText.span}</H4>
            <H2>{sliderText.title}</H2>
            <P>{sliderText.desc}</P>
            <Button onClick={onClick}>Xem sản phẩm</Button>
          </Box>
        </BoxLeft>
      </CarouselItem>
      <CarouselItem2>
        <BoxLeft>
          <Box>
            <H4>{sliderText.span}</H4>
            <H2>{sliderText.title}</H2>
            <P>{sliderText.desc}</P>
            <Button onClick={onClick}>Xem sản phẩm</Button>
          </Box>
        </BoxLeft>
      </CarouselItem2>
    </Carousel>
  );
};

export default Slider;
