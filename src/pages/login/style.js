import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(138deg, #f9f9f9, #efefef);
  width: 320px;
  height: 480px;
  padding: 0 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 120px;
    height: 120.8px;
    margin-top: 25px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 183px;
    height: 50px;
    margin: 30px 21px 53px;
    text-decoration: none;
    background-color: #34495e;
    text-transform: uppercase;
    font-family: Lato;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 2.4px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 255px;

    label {
      align-self: normal;
      height: 17px;
      margin-bottom: 10px
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      text-align: left;
      color: #858585;
    }

    input {
      height: 48px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 3px;
      background-color: #ffffff;
      border: 1px solid #ddd;
      font-size: 16px;
      padding: 0 10px;
      outline: none;
    }
  }

`;
