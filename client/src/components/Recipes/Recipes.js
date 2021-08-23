import React, { Component } from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";

import axios from "axios";
import { searchByName, filterByCategory, areaByRecipe } from "../../api/api";

import "./Recipes.scss";

export default class Recipes extends Component {
  state = {
    recipes: [],
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(e.target.value);
  };

  getCountryFlags = () => {
    const countries = [
      { code: "ca", area: "Canadian" },
      { code: "gb", area: "British" },
      { code: "in", area: "Indian" },
      { code: "us", area: "American" },
      { code: "fr", area: "French" },
      { code: "mx", area: "Mexican" },
      { code: "ch", area: "Chinese" },
      { code: "it", area: "Italian" },
      { code: "ml", area: "Malaysian" },
      { code: "sh", area: "Spanish" },
      { code: "tk", area: "Turkish" },
      { code: "pl", area: "Polish" },
    ];
    return countries.map((country) => (
      <img
        className="country-image"
        src={`https://www.countryflags.io/${country.code}/flat/64.png`}
        onClick={() => this.handleClickCountry(country.area)}
      />
    ));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(searchByName(this.state.search)).then((response) => {
      console.log(response.data);
      this.setState({
        recipes: response.data.meals,
      });
    });
  };

  handleClickCountry = (area) => {
    axios.get(areaByRecipe(area)).then((response) => {
      console.log(response);

      this.setState({
        recipes: response.data.meals,
      });
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="container-fluid">
          <div className="row">
            <h3 className="bycountry text-center mt-3">Browse by countries</h3>
          </div>
          {this.getCountryFlags()}
        </div>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}
