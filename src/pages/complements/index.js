import React, { Component } from "react";
import Header from "../../components/Header";

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
              <img
                alt="Double Coffee"
                src={require("../../assets/images/cafe-duplo.svg")}
              />
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
                <img
                  alt="Double Coffee"
                  src={require("../../assets/images/cafe-duplo.svg")}
                />
              </figure>
              <div>
                <h3>Café Duplo</h3>
                <small>0:45min</small>
              </div>
            </div>
            <div name="check">
              <input type="checkbox" id="1" name="inp-check" value="1" />
              <label htmlFor="1" />
            </div>
          </Product>
        </Ingredients>
        <Ingredients>
          <Product>
            <div>
              <figure>
                <img
                  alt="Double Coffee"
                  src={require("../../assets/images/cafe-duplo.svg")}
                />
              </figure>
              <div>
                <h3>Café Duplo</h3>
                <small>0:45min</small>
              </div>
            </div>
            <div name="check">
              <input type="checkbox" id="2" name="inp-check" value="2" />
              <label htmlFor="2" />
            </div>
          </Product>
        </Ingredients>
        <Ingredients>
          <Product>
            <div>
              <figure>
                <img
                  alt="Double Coffee"
                  src={require("../../assets/images/cafe-duplo.svg")}
                />
              </figure>
              <div>
                <h3>Café Duplo</h3>
                <small>0:45min</small>
              </div>
            </div>
            <div name="check">
              <input type="checkbox" id="3" name="inp-check" value="3" />
              <label htmlFor="3" />
            </div>
          </Product>
        </Ingredients>
        <Separator />
        <Product>
          <div>
            <figure>
              <img
                alt="Double Coffee"
                src={require("../../assets/images/cafe-duplo.svg")}
              />
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
                <img
                  alt="Double Coffee"
                  src={require("../../assets/images/cafe-duplo.svg")}
                />
              </figure>
              <div>
                <h3>Café Duplo</h3>
                <small>0:45min</small>
              </div>
            </div>
            <div name="check">
              <input type="checkbox" id="4" name="inp-check" value="4" />
              <label htmlFor="4" />
            </div>
          </Product>
        </Ingredients>
        <Separator />
        <ContentButtons>
          <Button to={"/recipes"} orange={"true"}>
            Voltar
          </Button>
          <Button to={"/final"} green={"true"}>
            Finalizar
          </Button>
        </ContentButtons>
      </Container>
    );
  }
}

export default Complements;
