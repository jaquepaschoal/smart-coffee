import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 120px;
    height: 120.8px;
    margin-top: 25px;
    margin-bottom: 44px;
  }
`;

export const FormContent = styled.div`
  margin: 0 20px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div:not(.contentButton) {
      display: flex;
      flex-direction: column;
      align-items: center;

      label {
        width: 100%;
        height: 17px;
        margin-bottom: 10px;
        font-family: "Lato", sans-serif;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.8px;
        text-align: left;
        color: #858585;
      }

      input {
        height: 48px;
        width: 270px;
        margin-bottom: 10px;
        border-radius: 3px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        font-size: 16px;
        padding: 0 10px;
        outline: none;
      }
    }

    div.contentButton {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      button {
        width: 183px;
        height: 50px;
        text-decoration: none;
        background-color: #34495e;
        text-transform: uppercase;
        font-family: Lato;
        font-size: 14px;
        margin-bottom: 53px;
        line-height: 1.36;
        letter-spacing: 2.4px;
        text-align: center;
        border: none;
        color: #ffffff;
        cursor: pointer;
      }
    }
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
