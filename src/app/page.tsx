import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-pink-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-yellow-200 py-8 px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-brown-800 text-center sm:text-left">
            Welcome to the Sweet Treat Bakery
          </h1>
          <p className="mt-2 text-base sm:text-lg text-center sm:text-left">
            Freshly baked goods made with love and care every day!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Image
              src="/bakery-hero.jpg"
              alt="Bakery Hero"
              width={750}
              height={250}
              className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-101 hover:-translate-y-2"
            />
            <Image
              src="/stock.jpg"
              alt="Bakery"
              width={750}
              height={250}
              className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-101 hover:-translate-y-2"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">
            At Sweet Treats Bakery, we specialize in crafting delicious pastries, cakes, and breads using the finest ingredients. Stop by and taste the difference!
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Image
              src="/family.jpg"
              alt="About Us"
              width={400}
              height={400}
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-101 hover:-translate-y-2"
            />
            <p className="text-lg max-w-sm font-bold text-center sm:text-left">
              Owned by the Smith family, we have been serving the community for over 10 years. Our passion for baking is evident in every bite of our treats.
            </p>
          </div>
          <div className="pt-2">
            <p className="font-bold">Contact us at:</p>
            <p>(123) 456-7890</p>
            <p>Contact@SweatTreatBakery.com</p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-16 px-8">
          <h2 className="text-3xl font-semibold text-center">Our Favorites</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {/* Product 1 */}
            <div className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2">
              <Image
                src="/rolls.jpg"
                alt="Cinnamon Rolls"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-medium">Our Fluffy Cinnamon Rolls</h3>
              <p className="mt-2 text-gray-600">Perfectly Warm, Gooey and Creamy.</p>
            </div>
            {/* Product 2 */}
            <div className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2">
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
            <div className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2">
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
      </main>
    </>
  );
}
