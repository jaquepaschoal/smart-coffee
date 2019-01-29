import styled, { injectGlobal } from "styled-components";
import CheckOk from "../assets/check-ok.svg";
import CheckEmpty from "../assets/check-empty.svg";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif;
  }

`;

export const Container = styled.div`
  background-image: linear-gradient(138deg, #f9f9f9, #efefef);
  width: 320px;
  height: auto;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

  @media print {
    padding-bottom: 20px;
  }

  h2 {
    width: 100%;
    height: 17px;
    font-family: "PT Sans Caption", sans-serif;
    font-size: 15px;
    font-weight: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #7c6e5f;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 20px 5px;

  div:first-child {
    display: flex;
    align-items: center;

    h3 {
      font-family: "PT Sans", sans-serif;
      font-size: 14px;
      font-weight: normal;
      line-height: 1;
      letter-spacing: 0.8px;
      color: #887a6a;
    }

    small {
      font-family: "PT Sans", sans-serif;
      font-size: 10px;
      letter-spacing: 0px;
      color: #7c6e5f;
      margin-top: 5px;
    }
  }

  div[name="check"] {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 25px;
    width: 25px;
    display: inline-block;
  }
  input[name="inp-check"] + label {
    background-image: url(${CheckEmpty});
  }
  input[name="inp-check"]:checked + label {
    background-image: url(${CheckOk});
  }

  figure img {
    width: 58px;
    height: 58px;
    margin-right: 10px;
  }
`;

export const Separator = styled.div`
  width: 280px;
  height: 1px;
  background-color: #c3c3c3;
  opacity: 0.41;
  margin: 0 20px;
`;
