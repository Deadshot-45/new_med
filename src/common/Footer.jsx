import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const Link1 = [
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/" },
  ];
  const Link2 = [
    { name: "Prescription", path: "/" },
    { name: "Vitamins", path: "/" },
    { name: "Supplements", path: "/" },
    { name: "Personal Care", path: "/" },
  ];
  const Link3 = [
    { name: "Help Center", path: "/" },
    { name: "Shipping Info", path: "/" },
    { name: "Returns", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];
  return (
    <footer className="bg-gray-900 text-white py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-col md:w-1/4 justify-between items-start  mb-8 max-md:w-[80%]">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">ENTIRE BIOTECH</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in health and wellness, providing quality
                medicines and expert care.
              </p>
            </div>
          </div>
          <div className="md:w-2/4 max-md:w-full grid md:grid-cols-3 max-md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {Link1.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Section */}
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {Link2.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {Link3.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MediCare. All rights reserved. | Licensed Pharmacy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
