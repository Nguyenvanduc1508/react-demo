import styled from "styled-components";
import trendimg1 from "../../../assets/bg/trend-1.jpg";
import trendImg2 from "../../../assets/bg/trend-2.jpg";

export const styleTrend = {
  styleBg: { height: "300px", overflow: "hidden" },
  row: { maxWidth: "1230px", margin: "0 auto" },
};

export const SectionTrend = styled.div`
  padding: 60px 0 90px;
`;
export const TrendMen = styled.div`
  background-image: url(${trendimg1});
  background-size: cover;
  height: 100%;
  background-position: 90% 50%;
  position: relative;
  cursor: pointer;
`;

export const TrendGirl = styled(TrendMen)`
  background-image: url(${trendImg2});
  background-position: 60% 50%;
`;

export const Span = styled.span`
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: block;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    width: 55px;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: rgb(200, 153, 121);
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
`;

export const TextGroup = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
`;
