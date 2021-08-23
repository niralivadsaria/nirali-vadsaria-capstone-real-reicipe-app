import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const searchByName = (searchKey) =>
  `${BASE_URL}filter.php?i=${searchKey}`;
export const filterByCategory = (category) =>
  `${BASE_URL}latest.php?c=${category}`;

export const idByRecipe = (id) => `${BASE_URL}lookup.php?i=${id}`;

export const areaByRecipe = (area) => `${BASE_URL}/filter.php?a=${area}`;
