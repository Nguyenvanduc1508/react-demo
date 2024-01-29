import styled from "styled-components";

export const LayoutDetails = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`;
export const AddQuantity = styled.div`
  display: flex;
  align-items: center;
`;

export const BlogText = styled.div`
  padding: 30px;
`;

export const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-top: 30px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    border: 1px solid #ddd;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
` 

export const Label = styled.label`
    margin-bottom: 5px;
    display: block;
    font-weight: bold;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ddd;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    font-size: 16px;
`

export const Button = styled.button`
    padding: 10px 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: #c89979;
    border: 1px solid #ddd;
    color: #fff;
    cursor: pointer;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);

    &:hover {
        opacity: .8
    }
`