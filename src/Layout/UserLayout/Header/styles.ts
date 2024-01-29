import styled from "styled-components";

export const style = {
  bg: {
    backgroundColor: "#333",
  },
  input: {
    maxWidth: "400px",
  },
  flex: {
    marginRight: "11px",
  },
  iconSearch: {
    fontSize: "30px",
    color: "#fff",
    padding: "5px 10px",
    cursor: "pointer",
  },
  badge: {
    color: " #fff",
    fontSize: "32px",
    cursor: "pointer",
  },
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
  },
  styleLink: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  },
  suffix: {
    fontSize: 25,
    color: "#c89979",
    cursor: "pointer",
  },
};

export const BoxBorder = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1230px;
  width: 100%;
  margin: 10px auto;
  padding: 0 15px;
`;

export const Image = styled.img`
  max-width: 200px;
`;

export const MenuHeader = styled.div`
    margin: 0 auto;
  > ul {
    display: flex;
    > .ant-menu-item {
        width: unset;

        &:hover {
          background-color: unset !important;
          & span {
            color: #c89979;
          }
        }
    }
    > .ant-menu-item-selected {
      background-color: unset;
    }
  }
  }
`;

export const InputSearch = styled.input`
  font-size: 16px;
  max-width: 400px;
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
`;
