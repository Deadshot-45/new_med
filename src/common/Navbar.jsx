import React from "react";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ cartCount, isMenuOpen, setIsMenuOpen, scrollToSection }) => (
  <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 overflow:hidden fade-in ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">MediCare</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:cursor-pointer hover:text-blue-600 transition-colors bg-transparent border-none outline-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden w-full show-menu left-0 absolute z-50 flex bg-white/80 backdrop-blur-sm flex-col">
        <div className="px-6 py-2 space-y-2 text-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left bg-transparent border-none outline-none cursor-pointer hover:cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </header>
);

export default Navbar;
