import styled from "styled-components";
import banner03 from "../../../assets/bg/banner-03.jpg";
import banner04 from "../../../assets/bg/banner-04.jpg";

export const style = {
  styleBg: { height: "250px", overflow: "hidden" },
  row: { maxWidth: "1230px", margin: "0 auto" },
  textGroup: { bottom: "0", top: "unset" },
};

export const SectionTrend = styled.div`
  padding: 60px 0 90px;
`;
export const BG = styled.div`
  background-image: url(${banner03});
  background-size: cover;
  height: 100%;
  background-position: 90% 50%;
  position: relative;
  cursor: pointer;

  &:last-child {
    background-image: url(${banner04});
    background-position: 60% 50%;
  }
`;


export const Span = styled.span`
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: block;
  max-width: 280px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  color: #fff;
`;

export const TextGroup = styled.div`
  position: absolute;
  left: 35px;
  top: 12%;
  color: #fff;

  
`;
