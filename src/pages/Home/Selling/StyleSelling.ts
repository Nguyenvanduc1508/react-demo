import { Card } from "antd";
import styled from "styled-components";
import Slider from "react-slick";

export const style = {
  content: { maxWidth: "1230px", margin: "0 auto 90px" },
  title: { marginLeft: "15px" },
  cardWrap: { width: 240, border: " 1x solid #ccc", margin: "0 15px" },
  bg: { backgroundColor: "#c89979" },
};

export const BorderWrap = styled.div`
  border: 1px solid #ccc;
  margin: 0 15px;
`;

export const FlexItem = styled(Slider)`
  & .slick-slide {
    > div {
      display: flex;
      justify-content: center;
    }
  }

  .prevArrow {
    position: absolute;
    top: -47px;
    right: 50px;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .nextArrow {
    position: absolute;
    top: -47px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const CardWrap = styled(Card)`
  margin: 10px 0;
  max-width: 280px;
  border: 1px solid #ccc;
  border-radius: 0;

  > .ant-card-cover {
    margin: 0;
  }

  >.ant-card-hoverable: hover {
    border-color: 1px solid #ccc;
    box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.16), 0 -1px 8px 0 rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.09));
  }

  > .ant-card-body {
    border-top: 1px solid #ccc;
    padding-bottom: 10px;
    text-align: center;
  }

  > .ant-card-actions {
    border: none;
    padding-bottom: 10px;
  }
  .ant-card-meta-description {
    color: #c89979;
    font-size: 15px;
    font-weight: bold;
  }
`;
