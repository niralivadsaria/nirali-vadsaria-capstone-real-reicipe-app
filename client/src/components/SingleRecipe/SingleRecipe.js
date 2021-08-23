import React, { Component } from "react";
import { searchByName, filterByCategory } from "../../api/api";
import { Link } from "react-router-dom";
import "./SingleRecipe.scss";
import { idByRecipe } from "../../api/api";
import axios from "axios";
import Recipe from "../Recipe/Recipe";

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id: null,
      youtubeId: null,
      loading: true,
    };
  }

  componentDidMount() {
    axios.get(idByRecipe(this.props.match.params.id)).then((response) => {
      console.log(response);
      this.setState({
        recipe: response.data.meals[0],
        youtubeId: response.data.meals[0].strYoutube.split("=")[1],
        loading: false,
      });
      console.log(this.state.recipe);
    });
  }

  render() {
    const {
      strMealThumb,
      strMeal,
      strCategory,
      strInstructions,
      strArea,
      strYoutube,
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-hotpink text-center">
                {" "}
                Recipe Loading please wait.....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-12 my-3 image_div">
            <img
              src={strMealThumb}
              className="image__card rounded"
              alt="recipeimg"
            />
            <h1 className="title"> {strMeal}</h1>
            <h2 className="category"> {strCategory}</h2>
            <h3 className="area"> {strArea}</h3>
          </div>

          <div class="tabs">
            <div class="tab">
              <input type="radio" id="tab1" name="tab-group" checked />
              <label for="tab1">Steps</label>
              <div class="tab-content">
                <p> {strInstructions}</p>
              </div>
            </div>

            <div class="tab">
              <input type="radio" id="tab2" name="tab-group" />
              <label for="tab2">Video</label>
              <div class="tab-content">
                <p>
                  <iframe
                    class="row"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${this.state.youtubeId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
