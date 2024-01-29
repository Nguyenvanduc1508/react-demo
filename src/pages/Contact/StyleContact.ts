import styled from "styled-components";

export const DivContact = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;

  .ant-row {
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`;

export const iconBox = {
  padding: "10px 9px",
  backgroundColor: "#c89979",
  marginRight: "15px",
};

export const styleText = {
  fontSize: "16px",
  color: "#353535",
  marginBottom: 0,
};

export const styleTitle = {
  fontSize: 20,
  fontWeight: "bold",
};

export const Link = styled.a`
  font-size: 16px;
  color: #353535;
  font-weight: 500;
  display: block;
  &:hover {
    color: #c89979;
    cursor: pointer;
  }
`;

export const styleInput = {
  width: "100%",
  outline: "none",
  border: "unset",
  background: "#f1f1f1",
  padding: "10px 15px",
  fontSize: "16px",
  borderRadius: "unset",
};

export const Button = styled.button`
  width: 50%;
  height: 45px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background-color: #c89979;
  margin: 0 auto;
  border: none;
  outline: none;
  display: block;
`;

export const WrapForm = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;
