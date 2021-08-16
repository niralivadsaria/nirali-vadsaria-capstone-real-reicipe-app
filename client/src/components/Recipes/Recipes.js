import React, { Component } from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";
import { recipeData } from "../../data/indian";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData,
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
