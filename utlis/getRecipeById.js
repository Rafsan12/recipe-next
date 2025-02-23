import recipes from "../data/recipes.json";

export function getRecipeById(id) {
  return recipes.filter((recipe) => recipe.category_id === id);
}
