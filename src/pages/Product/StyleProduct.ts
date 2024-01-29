import styled from "styled-components";

export const style = {
  iconStyle: {
    color: "#000",
    fontSize: "18px",
  },
  styleContent: {
    width: "1200px",
    margin: "0 auto",
  },
  styleBreadcrumb: {
    margin: "16px 0",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  styleLayout: {
    padding: "24px 0",
    background: "unset",
  },
};

export const Div = styled.div`
  margin-bottom: 24px;

  .ant-typography {
    color: #353535;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 25px;
  }
`;

export const Category = styled.div`
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 15px;
  background-color: rgba(221, 221, 221, 0.1);
`;

export const CategoryItem = styled.p`
  border-bottom: 1px dashed #ccc;
  font-weight: 600;
  padding: 10px 0;

  &:last-child {
    border: unset;
  }
`

