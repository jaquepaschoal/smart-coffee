import React, { Component } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";

import DoubleCoffee from "../../assets/cafe-duplo.svg";

import { Container, Product, Separator } from "../../styles/global";
import { Button, ContentButton } from "./style";

import { connect } from "react-redux";
import { Creators as RecipesActions } from "../../store/ducks/recipes";
import { bindActionCreators } from "redux";

class Recipes extends Component {
  // state = {
  //   counter: 0,
  //   isError: false
  // };

  handleCheck(e) {
    const checks = document.getElementsByName(e.target.name);
    this.props.handleChecks(checks, e.target);
  }
  render() {
    return (
      <Container>
        <Header />
        {this.state.isError && (
          <Error text={"Selecione no máximo 02 complementos!"} />
        )}
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
            />
            <label htmlFor="1" />
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
            <input
              type="checkbox"
              onClick={e => this.handleCheck(e)}
              id="2"
              name="inp-check"
            />
            <label htmlFor="2" />
          </div>
        </Product>
        <Separator />
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
            <input
              type="checkbox"
              onClick={e => this.handleCheck(e)}
              id="3"
              name="inp-check"
            />
            <label htmlFor="3" />
          </div>
        </Product>
        <Separator />
        <ContentButton>
          <Button to={"/complements"}>Continuar</Button>
        </ContentButton>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RecipesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
