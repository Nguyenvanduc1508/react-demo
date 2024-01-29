import styled from "styled-components";

export const ImageTable = styled.img`
  width: 75px;
  border-radius: 5px;
`;
export const BtnCart = styled.button`
  width: 100%;
  display: block;
  padding: 15px 20px;
  background-color: #c89979;
  outline: none;
  border: none;
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const BtnPay = styled(BtnCart)`
  background-color: #d26e4b;
`;

export const TextCart = styled.p`
  margin-bottom: 0;
  font-weight: 500;
  color: #000;
`;

export const Subtotal = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

export const BtnBackProduct = styled.button`
  border: 2px solid #c89979;
  background: unset;
  padding: 10px;
  width: 300px;
  display: block;
  color: #c89979;
  font-weight: bold;

  &:hover {
    color: #fff;
    background-color: #c89979;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const BtnReset = styled.button`
  border: unset;
  background: #c89979;
  padding: 10px;
  width: 150px;
  display: block;
  font-weight: bold;
  color: #fff;
  margin: 0 20px;
  cursor: pointer;

  &: hover {
    opacity: .7;
    transition: all 0.3s;
  }
`;
