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
  state = {
    counter: 0
  };

  handleCheck(e) {
    const props = this.props;
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
          props.isError(true);
        }
      });
    }

    function uncheck(value) {
      return checks.forEach(value => {
        if (value.disabled) {
          value.disabled = false;
          props.isError(false);
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
        {this.props.recipes.error && (
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
