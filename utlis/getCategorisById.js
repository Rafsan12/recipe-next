import categories from "../data/categories.json";

export function getCategoriesById(id) {
  return categories.find((category) => category.id === id);
}
