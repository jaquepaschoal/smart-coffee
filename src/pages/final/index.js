import React, { Component } from "react";
import { Container } from "../../styles/global";
import { Main, Coupon, ContentButtons, Button, Countdown } from "./style";
import ReactCountdownClock from "react-countdown-clock";

import Header from "../../components/Header";

class Final extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <h2>Pedido realizado com sucesso!</h2>
          <Countdown>
            <ReactCountdownClock
              seconds={60}
              color="#3dc890"
              alpha={0.9}
              size={200}
              weight={12}
              fontSize={"26px"}
              font={"PT Sans"}
              timeFormat={"hms"}
              onComplete={console.log("hi")}
            />
          </Countdown>
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
