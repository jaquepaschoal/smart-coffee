import styled from "styled-components";

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
  background-color: blue;
`;

export const Button = styled.button`
  width: 160px;
  height: 49px;
  border: none;
  background-color: ${props => (props.orange ? "#d15f41" : "#3dc890")};
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;
