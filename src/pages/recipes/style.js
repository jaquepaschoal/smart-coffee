import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentButton = styled.div`
  display: flex;
  height: 49px;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  background-color: #34495e;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  text-transform: uppercase
  line-height: 1.36;
  letter-spacing: 2.4px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
`;
