import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Recipe.scss";

export default class Recipe extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <div className="col-sm-3 mb-5">
        <div className="card">
          <Link
            to={`/recipes/${recipe.idMeal}`}
            className="text-capitalize meal-link"
          >
            <img src={recipe.strMealThumb} className="card-top" alt="recipe" />
          </Link>
          <div className="card-body text-capitalize">
            <Link
              to={`/recipes/${recipe.idMeal}`}
              className="text-capitalize meal-link"
            >
              <h5> {recipe.strMeal} </h5>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
