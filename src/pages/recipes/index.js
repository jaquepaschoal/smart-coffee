import React, { Component } from "react";
import Header from "../../components/Header";

import DoubleCoffee from "../../assets/cafe-duplo.svg";

import { Container, Main, Separator, Button } from "./style";

class Recipes extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <div>
            <figure>
              <img alt="Double Coffee" src={DoubleCoffee} />
            </figure>
            <div>
              <h3>Café Duplo</h3>
              <small>0:45min</small>
            </div>
          </div>
          <div>
            <input class="" type="checkbox" id="check" name="inp-check" />
            <label for="check" />
          </div>
        </Main>
        <Separator />
        <Main>
          <div>
            <figure>
              <img alt="Double Coffee" src={DoubleCoffee} />
            </figure>
            <div>
              <h3>Café Duplo</h3>
              <small>0:45min</small>
            </div>
          </div>
          <div>
            <input type="checkbox" id="check2" name="inp-check" />
            <label for="check2" />
          </div>
        </Main>
        <Separator />
        <Button>Continuar</Button>
      </Container>
    );
  }
}

export default Recipes;
