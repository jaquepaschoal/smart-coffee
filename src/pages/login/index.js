import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Image, ButtonContent } from "./style";

import Coffee from "../../assets/coffee.svg";

class Login extends Component {
  render() {
    return (
      <Container>
        <Image>
          <img src={Coffee} />
        </Image>
        <form>
          <div>
            <label>Nome completo</label>
            <input type="text" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" />
          </div>
        </form>
        <ButtonContent>
          <button>Cadastrar</button>
        </ButtonContent>
      </Container>
    );
  }
}

export default Login;
