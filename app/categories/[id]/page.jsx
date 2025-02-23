import { getCategoriesById } from "@/utlis/getCategorisById";
import { getRecipeById } from "@/utlis/getRecipeById";
import Image from "next/image";

export default async function CategoryDetails({ params }) {
  const { id } = await params;
  const category = await getCategoriesById(id);
  // console.log("Category:", category);
  const recipe = await getRecipeById(id);
  // console.log("Recipe:", recipe);

  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {category.name}{" "}
              <span className="text-gray-500 text-2xl font-normal">
                ({recipe.length})
              </span>
            </h1>
            <p className="text-gray-600">
              One thing I learned living in the Canarsie section of Brooklyn, NY
              was how to cook a good Italian meal. Here is a recipe I created
              after having this dish in a restaurant. Enjoy!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipe.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/thumbs/${item.thumbnail}`}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
