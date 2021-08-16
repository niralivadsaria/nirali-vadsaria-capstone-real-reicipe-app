// import React, { useState } from "react";
// import Axios from "axios";
// import { Link } from "react-router-dom";
// // import RecipePage from "../recipePage/recipePage";

// function Header() {
//   const [recipes, setrecipes] = useState([]);
//   const [query, setquery] = useState("");

//   const url =
//     "https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/filter.php?i=" +
//     query;

//   async function getItems() {
//     var result = await Axios.get(url);
//     console.log(result.data.meals);
//     setrecipes(result.data.meals);
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     getItems();
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <form className="app__searchForm" onSubmit={onSubmit}>
//           <div className="search-wrapper justify-content-center">
//             <input
//               type="text"
//               className="app_input"
//               placeholder="enter_ingridient"
//               value={query}
//               onChange={(e) => setquery(e.target.value)}
//             />
//             <input type="button" value="Search"></input>
//           </div>
//         </form>
//       </div>
//       <br></br>
//       <div className="row category ">
//         <div className="cat col-sm-12">
//           {recipes.map((recipes) => {
//             return (
//               <div className="recipeName col-sm-3 overflow-hidden gy-5">
//                 {/* <Link to="/recipePage/recipePage.js"> */}
//                 <Link
//                   className="Recipelink"
//                   to={"/RecipePage?" + recipes["idMeal"]}
//                 >
//                   <img
//                     className="recipeImg col-sm-12"
//                     src={recipes["strMealThumb"]}
//                   />
//                   <div className="recipeTitle text-center">
//                     {recipes["strMeal"]}
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { Component } from "react";
import HomePage from "../HomePage/HomePage";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <HomePage title="Lovely Recipes">
        {/* <Link to="recipes" className="home__title">
          Search Recipes
        </Link> */}
      </HomePage>
    );
  }
}
