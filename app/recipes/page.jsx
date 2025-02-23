import Image from "next/image";
import Link from "next/link";
import recipes from "../../data/recipes.json";

export default function RecipesPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.title} href={`/recipes/${recipe.category_id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  width={100}
                  height={100}
                  src={`/thumbs/${recipe.thumbnail}`}
                  alt="Decadent Raspberry and Cream Cake"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
