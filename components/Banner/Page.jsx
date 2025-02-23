import Image from "next/image";
import Link from "next/link";
import recipes from "../../data/recipes.json";

export default function BannerPage() {
  return (
    <>
      <section className="mb-16 bg-orange-50">
        {recipes.slice(0, 1).map((recipe) => (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt="Mighty Super Cheesecake"
                width={100}
                height={100}
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
              <p className="text-gray-600 mb-4">
                Indulge in the ultimate Italian dessert experience with our
                velvety smooth tiramisu. Layers of coffee-soaked ladyfingers and
                creamy mascarpone filling create a heavenly treat that's sure to
                impress.
              </p>
              <Link
                href={`/recipes/${recipe.category_id}`}
                className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
