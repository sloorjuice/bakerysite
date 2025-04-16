import Link from "next/link";
import Image from "next/image"; // Import the Image component

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-3">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          {/* Add the SVG icon */}
          <Image
            src="/icon.svg" // Path to your SVG in the public folder
            alt="Sweet Treats Bakery Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
          />
          <h1 className="text-2xl font-bold">Sweet Treats Bakery</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-yellow-300">
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}