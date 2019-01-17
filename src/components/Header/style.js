import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  margin: 0 20px
  justify-content: space-between;

  img {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-family: "PT Sans", sans-serif;
    font-size: 29px;
    font-weight: normal;
    letter-spacing: 3px;
    margin-bottom: 8px
    color: #503a23;
  }

  small {
    font-family: "PT Sans", sans-serif;
    font-size: 11px;
    letter-spacing: 1.1px;
    color: rgba(80, 58, 35, 0.62);
  }

  div:last-child {
    text-align: right;
  }
`;

export const Separator = styled.div`
  width: 283px;
  height: 2px;
  margin: 10px 20px;
  background-color: #c3c3c3;
  opacity: 0.41;
`;
