import React, { Component } from "react";
import "./Search.scss";
import images from "../../assets/Images/ask-a-chef.jpg";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="text-center">
            <div className="searchbar-div">
              <img className="searchbar-img" src={images} />
            </div>
            <form className="col-sm-6 search-recipes">
              <div className="input-group">
                <input
                  className="form-control shadow-lg p-3 mb-1 bg-white rounded"
                  type="text"
                  id="Search"
                  placeholder="Search by main ingredient"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text btn btn-md btn-secondary ml-3 rounded"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Search
                    <i classNmae="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
            <h3 className="bycountry text-center mb-4">
              Browse by ingredients
            </h3>
            <div className="ingredients-list text-center">
              <div className="row row-1 pb-3">
                <span className="tags ml-2" value="chicken">
                  chicken
                </span>
                <span className="tags ml-2" value="eggs">
                  eggs
                </span>
                <span className="tags ml-2" value="beef">
                  beef
                </span>
                <span className="tags ml-2" value="bread">
                  bread
                </span>
              </div>

              <div className="row row-2 ml-5 pb-3">
                <span className="tags ml-2" value="ham">
                  ham
                </span>
                <span className="tags ml-2" value="bacon">
                  bacon
                </span>
                <span className="tags ml-2" value="tomatoes">
                  bacon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
