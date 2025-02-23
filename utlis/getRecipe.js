import recipes from "../data/recipes.json";

const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing spaces
    .replace(/ /g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove all non-word characters (except hyphens)
};
export function getRecipe(id) {
  return recipes.find((recipe) => recipe.category_id === id);
}
