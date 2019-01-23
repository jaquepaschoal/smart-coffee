import styled from "styled-components";

export const Main = styled.div`
  h2 {
    width: 60%;
    font-family: "PT Sans", sans-serif;
    font-size: 26px;
    font-weight: normal;
    letter-spacing: -0.6px;
    text-align: center;
    margin: 39px auto;
    color: #5e4429;
  }
`;

export const Coupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 66px;
  border: 5px solid #cacaca;
  border-style: dashed;
  margin: 32px auto 0;

  font-family: "PT Sans", sans-serif;
  font-size: 26px;
  letter-spacing: -0.6px;
  text-align: center;
  color: #5e4429;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 24px;
  margin-top: 31px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.reload ? "49px" : "224px")};
  height: 49px;
  background-color: ${props => (props.reload ? "#cacaca" : "#34495e")};

  font-family: "Lato", sans-serif;
  font-size: ${props => (props.reload ? "25px" : "14px")};
  font-weight: 300;
  line-height: 1.36;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;
