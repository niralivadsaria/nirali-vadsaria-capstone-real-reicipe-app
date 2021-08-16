// import React from "react";
// import Axios from "axios";
// import { useState } from "react";

// function Category() {
//   const url =
//     "https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

//   const [recipes, setrecipes] = useState([]);

//   async function getCategory() {
//     var result = await Axios.get(url);
//     console.log(result.data.meals);
//     setrecipes(result.data.meals);
//   }

//   return (
//     <div className="category">
//       <div className="cat">
//         {recipes.map((recipes) => {
//           return (
//             <div className="recipeName">
//               <div className="recipeTitle">{recipes["strMeal"]}</div>
//               <img className="recipeImg col-6" src={recipes["strMealThumb"]} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Category;
