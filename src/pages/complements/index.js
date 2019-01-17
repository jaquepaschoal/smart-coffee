import React, { Component } from "react";
import Header from "../../components/Header";

import DoubleCoffee from "../../assets/cafe-duplo.svg";

import { Container, Product, Separator } from "../../styles/global";
import { Ingredients, ContentButtons, Button } from "./style";

class Complements extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h2>Adicione complementos ao seu pedido</h2>
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
        </Product>
        <Ingredients>
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
        </Ingredients>
        <Ingredients>
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
        </Ingredients>
        <Ingredients>
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
        </Ingredients>
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
        </Product>
        <Ingredients>
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
        </Ingredients>
        <Separator />
        <ContentButtons>
          <Button orange>Voltar</Button>
          <Button green>Finalizar</Button>
        </ContentButtons>
      </Container>
    );
  }
}

export default Complements;
