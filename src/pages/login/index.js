import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Image, ButtonContent, Form } from "./style";
import { Container } from "../../styles/global";

import { Link } from "react-router-dom";

import Coffee from "../../assets/coffee.svg";

class Login extends Component {
  render() {
    return (
      <Container>
        <Image>
          <img src={Coffee} alt="Coffee" />
        </Image>
        <Form>
          <div>
            <label>Nome completo</label>
            <input type="text" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" />
          </div>
        </Form>
        <ButtonContent>
          <Link to={"/recipes"}>Cadastrar</Link>
        </ButtonContent>
      </Container>
    );
  }
}

export default Login;
