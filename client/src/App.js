import "./App.css";
import React, { Component, component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Default from "./components/DefaultPage/DefaultPage";
import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;
