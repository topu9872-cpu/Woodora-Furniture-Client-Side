import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#4c4949] text-white mt-30">
      <div className="w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h1 className="text-3xl font-bold text-[#d58a4c]">Woodora</h1>
          <p className="mt-4 text-gray-300">
            We design premium quality furniture that brings comfort, style, and
            elegance to your home.
          </p>
        </div>

               <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Custom Furniture</li>
            <li>Home Delivery</li>
            <li>Interior Design</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* Premium Image */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Premium Look</h2>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop"
            alt="premium furniture"
            className="rounded-2xl w-full h-40 object-cover"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FurniCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
