import { Card, Col, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { BlogType } from "../../Types/Product.type";
import { style } from "../Home/Introduce/IntroStyle";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blog }: { blog: BlogType[] }) => {
  const navigate = useNavigate();
  return (
    <>
      {blog.map((item) => (
        <Col key={item.id} xs={{ span: 5 }} lg={{ span: 8 }}>
          <Card
          onClick={() => navigate(`/blog/${item.id}`)}
            hoverable
            style={style.card}
            cover={
              <Image
                style={{ objectFit: "cover" }}
                alt={item.title}
                src={item.img}
                preview={false}
                height={175}
              />
            }
          >
            <Meta title={item.title} description={item.desc} />
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogItem;
