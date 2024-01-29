import { memo } from "react";
import { Button, Col, Image, Row } from "antd";
import { CardWrap } from "../Home/Selling/StyleSelling";
import Meta from "antd/es/card/Meta";
import { Products } from "../../Types/Product.type";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/ContextDatasProvider";

const ProductList = ({ data }: { data: Products[] }) => {
  const navigate = useNavigate();
  const { addCartItem } = useDataContext();
  // const [initLoading, setInitLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  // const [datas, setDatas] = useState<Products[]>([]);
  // const [list, setList] = useState<Products[]>([]);
  // useEffect(() => {
  //   setInitLoading(false);
  //   setDatas(data);
  //   setList(data);
  // }, []);
  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     datas.concat(
  //       [...new Array(4)].map(() => ({ loading: true, name: {}, image: {} }))),
  //   );
  //   const newData = datas.concat(data);
  //   setDatas(newData);
  //   setList(newData);
  //   setLoading(false);
  // };
  
  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;
  return (
    // <List
    //   loading={initLoading}
    //   loadMore={loadMore}
    //   dataSource={list}
    //   grid={{ gutter: 16, column: 4 }}
    //   renderItem={(item) => (
    //     <Col key={item.id}>
    //       <CardWrap
    //         hoverable
    //         style={{
    //           width: "100%",
    //           border: " 1x solid #ccc",
    //           marginTop: 0,
    //           marginBottom: "16px",
    //         }}
    //         cover={
    //           <Image
    //             onClick={() => navigate(`/products/${item.id}`)}
    //             preview={false}
    //             src={item.image}
    //           />
    //         }
    //         actions={[
    //           <Button
    //             onClick={() => addCartItem(item)}
    //             style={{ backgroundColor: "#c89979" }}
    //             type="primary"
    //           >
    //             THÊM VÀO GIỎ
    //           </Button>,
    //         ]}
    //       >
    //         <Meta title={item.name} description={item.currentPrice} />
    //       </CardWrap>
    //     </Col>
    //     // <Row>

    //     //   <Skeleton avatar title={false} loading={item.loading} active>

    //     //     </Skeleton>
    //     // </Row>
    //   )}
    // >
    // </List>
    <Row gutter={[16, 0]}>
        {data.map((prod) => (
          <Col key={prod.id} span={6}>
            <CardWrap
              hoverable
              style={{
                width: "100%",
                border: " 1x solid #ccc",
                marginTop: 0,
                marginBottom: "16px",
              }}
              cover={
                <Image
                  onClick={() => navigate(`/products/${prod.id}`)}
                  preview={false}
                  src={prod.image}
                />
              }
              actions={[
                <Button
                  onClick={() => addCartItem(prod)}
                  style={{ backgroundColor: "#c89979" }}
                  type="primary"
                >
                  THÊM VÀO GIỎ
                </Button>,
              ]}
            >
              <Meta title={prod.name} description={prod.currentPrice} />
            </CardWrap>
          </Col>
        ))}
      </Row>
  );
};

export default memo(ProductList);
