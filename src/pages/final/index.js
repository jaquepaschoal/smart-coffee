import React, { Component } from "react";
import { Container } from "../../styles/global";
import { Main, Coupon, ContentButtons, Button } from "./style";

import Header from "../../components/Header";

class Final extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <h2>Pedido realizado com sucesso</h2>
          <div>Contador</div>
          <Coupon>SC123456</Coupon>
          <ContentButtons>
            <Button reload>
              <i className="fas fa-redo-alt" />
            </Button>
            <Button print>Imprimir cupom</Button>
          </ContentButtons>
        </Main>
      </Container>
    );
  }
}

export default Final;
