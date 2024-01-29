import styled from "styled-components";

export const style = {
  card: { width: "100%", height: "100%" },
  mb: { marginBottom: "90px" },
};

export const BlogRight = styled.div`
  margin: 0 auto;

  .ant-card-cover {
    .ant-image {
      height: 213px;
      & img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
