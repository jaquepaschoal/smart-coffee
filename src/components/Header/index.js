import React, { Fragment } from "react";

import { Container, Separator } from "./style";

const Header = () => (
  <Fragment>
    <Container>
      <div>
        <img src={require("../../assets/images/coffee.svg")} alt="Coffee" />
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
