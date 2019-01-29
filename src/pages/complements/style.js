import styled from "styled-components";
import { Link } from "react-router-dom";

export const Ingredients = styled.div`
  display: flex;
  justify-content: flex-end;

  div:first-child {
    margin: 3px 20px 5px !important;
  }

  img {
    height: 41px !important;
    width: 41px !important;
  }

  h3 {
    font-size: 12px !important;
  }

  input[type="checkbox"] + label {
    width: 21px !important;
    height: 21px !important;
  }

  div[name="check"] {
    margin-left: 64px;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  width: 100%;
  height: 49px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: none;
  text-decoration: none;
  background-color: ${props => (props.orange ? "#d15f41" : "#3dc890")};
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #ffffff;
`;
