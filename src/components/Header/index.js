import React, { Fragment } from "react";

import { Container, Separator } from "./style";

import Coffee from "../../assets/coffee.svg";

const Header = () => (
  <Fragment>
    <Container>
      <div>
        <img src={Coffee} alt="Coffee" />
      </div>
      <div>
        <h1>Smart Coffee</h1>
        <small>by Alboom</small>
      </div>
    </Container>
    <Separator />
  </Fragment>
);

export default Header;
