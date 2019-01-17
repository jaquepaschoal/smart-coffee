import React, { Component } from "react";
import Header from "../../components/Header";

import DoubleCoffee from "../../assets/cafe-duplo.svg";

import { Container, Product, Separator } from "../../styles/global";
import { Button } from "./style";

class Recipes extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Product>
          <div>
            <figure>
              <img alt="Double Coffee" src={DoubleCoffee} />
            </figure>
            <div>
              <h3>Café Duplo</h3>
              <small>0:45min</small>
            </div>
          </div>
          <div name="check">
            <input type="checkbox" id="check" name="inp-check" />
            <label for="check" />
          </div>
        </Product>
        <Separator />
        <Product>
          <div>
            <figure>
              <img alt="Double Coffee" src={DoubleCoffee} />
            </figure>
            <div>
              <h3>Café Duplo</h3>
              <small>0:45min</small>
            </div>
          </div>
          <div name="check">
            <input type="checkbox" id="check2" name="inp-check" />
            <label for="check2" />
          </div>
        </Product>
        <Separator />
        <Button>Continuar</Button>
      </Container>
    );
  }
}

export default Recipes;
