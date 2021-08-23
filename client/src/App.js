import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Default from "./components/DefaultPage/DefaultPage";
import Navbar from "./components/Navbar/Navbar";
import ProtectiveRoutes from "./components/ProtectiveRoutes";
import WelcomeHome from "./components/pages/welcomeHome";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <ProtectiveRoutes exact path="/" component={Home} />

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
