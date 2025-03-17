import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-200 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Demo Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Me
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-2 space-y-3 text-center">
          <Link to="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="block hover:text-gray-300">
            Contact Me
          </Link>
          <Link to="/login" className="block hover:text-gray-300">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
