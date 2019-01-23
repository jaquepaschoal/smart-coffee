import React, { Component } from "react";
import Header from "../../components/Header";

import DoubleCoffee from "../../assets/cafe-duplo.svg";

import { Container, Product, Separator } from "../../styles/global";
import { Ingredients, ContentButtons, Button } from "./style";

class Complements extends Component {
  state = {
    counter: 0
  };

  handleCheck(e) {
    const checks = document.getElementsByName(e.target.name);
    let count = this.state.counter;

    if (e.target.checked) {
      count++;
      valueLimit(count) ? check(e.target) : false;
    } else {
      count--;
      if (!valueLimit(count)) {
        uncheck(e.target);
      }
    }

    function check(value) {
      return checks.forEach(value => {
        if (!value.checked) {
          value.disabled = true;
        }
      });
    }

    function uncheck(value) {
      return checks.forEach(value => {
        if (value.disabled) {
          value.disabled = false;
        }
      });
    }

    function valueLimit(count) {
      return count === 2 ? true : false;
    }

    this.setState({ counter: count });
  }

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
              <input
                type="checkbox"
                onClick={e => this.handleCheck(e)}
                id="1"
                name="inp-check"
                value="1"
              />
              <label htmlFor="1" />
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
              <input
                type="checkbox"
                onClick={e => this.handleCheck(e)}
                id="2"
                name="inp-check"
                value="2"
              />
              <label htmlFor="2" />
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
              <input
                type="checkbox"
                onClick={e => this.handleCheck(e)}
                id="3"
                name="inp-check"
                value="3"
              />
              <label htmlFor="3" />
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
              <input
                type="checkbox"
                onClick={e => this.handleCheck(e)}
                id="4"
                name="inp-check"
                value="4"
              />
              <label htmlFor="4" />
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
