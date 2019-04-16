import React, { Component } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";

import { Container, Product, Separator } from "../../styles/global";
import { Button, ContentButton } from "./style";

import { connect } from "react-redux";
import { Creators as RecipesActions } from "../../store/ducks/recipes";
import { bindActionCreators } from "redux";

class Recipes extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    this.props.getRecipesRequest();
  }

  renderRecipes() {
    const recipes = this.props.recipes.data;

    return (
      <Container>
        <Header />
        {this.props.recipes.error && (
          <Error text="Você só pode escolher dois itens!" />
        )}
        {recipes &&
          recipes.map(recipe => {
            return (
              <div key={recipe.id}>
                <Product>
                  <div>
                    <figure>
                      <img
                        alt={recipe.name}
                        src={require(`../../assets/${recipe.photo}`)}
                      />
                    </figure>
                    <div>
                      <h3>{recipe.name}</h3>
                      <small>0:45min</small>
                    </div>
                  </div>
                  <div name="check">
                    <input
                      type="checkbox"
                      onClick={e => this.handleCheck(e)}
                      id={recipe.id}
                      name="inp-check"
                    />
                    <label htmlFor={recipe.id} />
                  </div>
                </Product>
                <Separator />
              </div>
            );
          })}
        <ContentButton>
          <Button to={"/complements"}>Continuar</Button>
        </ContentButton>
      </Container>
    );
  }

  handleCheck(e) {
    const props = this.props;
    const checks = document.getElementsByName(e.target.name);
    let count = this.state.counter;

    const valueLimit = count => {
      return count === 2 ? true : false;
    };

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

    this.setState({ counter: count });
  }

  render() {
    return this.props.recipes.loading ? (
      <Container>
        <Header />
        Carregando
      </Container>
    ) : (
      this.renderRecipes()
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
