"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "@/Components/Modal";

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800">
      {/* Modal */}
      {selectedImage && <Modal imageSrc={selectedImage} onClose={closeModal} />}

      <section className="py-8 px-8 text-center">
        <h1 className="text-4xl font-bold text-brown-800">Our Menu</h1>
        <p className="text-lg">
          Explore our delicious selection of baked goods, crafted with love and the finest ingredients.
        </p>
      </section>

      <section className="px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-6">
          {/* Item 1 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/cupcake.jpg")}
          >
            <Image
              src="/cupcake.jpg"
              alt="Cupcake"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Cupcakes</h3>
            <p className="mt-2 text-gray-600">Perfectly sweet in a variety of flavors.</p>
            <p className="mt-2 font-bold">$3.50 each</p>
          </div>
          {/* Item 2 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/bread.jpg")}
          >
            <Image
              src="/bread.jpg"
              alt="Fluffy Bread"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Fresh Bread</h3>
            <p className="mt-2 text-gray-600">Freshly baked with a crispy crust and soft interior.</p>
            <p className="mt-2 font-bold">$5.00 per loaf</p>
          </div>
          {/* Item 3 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/cake.jpg")}
          >
            <Image
              src="/cake.jpg"
              alt="Custom Cakes"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Custom Cakes</h3>
            <p className="mt-2 text-gray-600">Beautifully designed cakes for every occasion.</p>
            <p className="mt-2 font-bold">Starting at $25.00</p>
          </div>
          {/* Item 4 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/cookies.jpg")}
          >
            <Image
              src="/cookies.jpg"
              alt="Cookies"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Cookies</h3>
            <p className="mt-2 text-gray-600">Soft, chewy, and available in classic flavors.</p>
            <p className="mt-2 font-bold">$1.50 each</p>
          </div>
          {/* Item 5 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/rolls.jpg")}
          >
            <Image
              src="/rolls.jpg"
              alt="Muffins"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Cinnamon Rolls</h3>
            <p className="mt-2 text-gray-600">Perfect for breakfast or a quick snack.</p>
            <p className="mt-2 font-bold">$3.50 each</p>
          </div>
          {/* Item 6 */}
          <div
            className="rounded-lg border p-4 shadow-sm hover:scale-101 hover:-translate-y-2 cursor-pointer"
            onClick={() => openModal("/doughnuts.jpg")}
          >
            <Image
              src="/doughnuts.jpg"
              alt="Doughnuts"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-medium">Doughnuts</h3>
            <p className="mt-2 text-gray-600">Fresh, Fluffy, and filled with delicious flavors.</p>
            <p className="mt-2 font-bold">$3.00 each</p>
          </div>
        </div>
      </section>
    </main>
  );
}