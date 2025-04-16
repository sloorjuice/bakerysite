import Image from "next/image";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pink-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-yellow-200 py-8 pl-8 pr-8">
          <h1 className="text-5xl font-bold text-brown-800">Welcome to the Sweat Treat Bakery</h1>
          <p className="mt-1 text-lg">Freshly baked goods made with love and care every day!</p>
          <p className="text-lg">Owned locally by your neighbors!</p>
          <div className="flex justify-between mt-6 pl-4 pr-4 gap-4">
            <Image
              src="/bakery-hero.jpg"
              alt="Bakery Hero"
              width={750}
              height={350}
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-101 hover:-translate-y-2 "
            />
            <Image
            src="/bakery-hero.jpg"
            alt="Bakery Hero"
            width={750}
            height={350}
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-101 hover:-translate-y-2 "
          />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">
            At Sweet Treats Bakery, we specialize in crafting delicious pastries, cakes, and breads using the finest ingredients. Stop by and taste the difference!
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Image
              src="/family.jpg"
              alt="About Us"
              width={400}
              height={400}
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-101 hover:-translate-y-2"/>
            <p className="text-lg max-w-sm font-bold">
              Owned by the Smith family, we have been serving the community for over 10 years. Our passion for baking is evident in every bite of our treats.
            </p>
          </div>
          <div>
            <p className="font-bold">Contact us at:</p>
            <p>(123) 456-7890</p>
            <p>Contact@SweatTreatBakery.com</p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-16 px-8">
          <h2 className="text-3xl font-semibold text-center">Our Favorites</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="rounded-lg border p-4 shadow-sm">
              <Image
                src="/cupcake.jpg"
                alt="Cupcake"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-medium">Delicious Sweets</h3>
              <p className="mt-2 text-gray-600">Perfectly sweet in a variety of flavors.</p>
            </div>
            {/* Product 2 */}
            <div className="rounded-lg border p-4 shadow-sm">
              <Image
                src="/bread.jpg"
                alt="Artisan Bread"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-medium">Fresh Bread</h3>
              <p className="mt-2 text-gray-600">Freshly baked bread with a crispy crust and soft interior.</p>
            </div>
            {/* Product 3 */}
            <div className="rounded-lg border p-4 shadow-sm">
              <Image
                src="/cake.jpg"
                alt="Custom Cakes"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-medium">Custom Cakes</h3>
              <p className="mt-2 text-gray-600">Beautifully designed cakes for every occasion.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-8 text-center text-white">
          <p>&copy; 2025 Sweet Treats Bakery. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
