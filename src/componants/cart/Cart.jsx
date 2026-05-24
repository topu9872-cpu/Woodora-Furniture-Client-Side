import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyBookings from "./MyBookings";
import MyProfile from "./MyProfile";
import { getCartProducts } from "../../../public/ServerData/ServerData";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([]);
console.log(cart)
  useEffect(() => {
    const handleCart = async () => {
      const cartData = await getCartProducts();

      setCart(cartData);
    };
    handleCart();
  }, []);

  return (
  <div className="bg-[#f8f5f0] min-h-screen py-10">
  <div className="w-11/12 max-w-7xl mx-auto mt-30">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold text-[#2c2c2c]">
          Shopping Cart
        </h1>
        <p className="text-gray-500 mt-2">
          {cart.length} item{cart.length !== 1 && "s"} in your cart
        </p>
      </div>

      <div className="hidden md:block">
        <span className="bg-[#b6845c] text-white px-5 py-3 rounded-xl">
          Woodora Cart
        </span>
      </div>
    </div>

    <div className="grid gap-6">
      {cart.map((c) => (
        <div
          key={c._id}
          className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="w-full md:w-52">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-52 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {c.name}
                </h2>

                <p className="text-gray-500 mt-2 line-clamp-2">
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="badge badge-outline">
                    {c.category}
                  </span>

                  <span className="badge badge-outline">
                    {c.material}
                  </span>

                  <span className="badge badge-outline">
                    {c.color}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
                <h3 className="text-3xl font-bold text-[#b6845c]">
                  ${c.price}
                </h3>

                <div className="flex gap-3">
                  <Link to={`/products/${c. productId}`} className="btn btn-outline rounded-xl">
                    View Details
                  </Link>

                  <button className="btn bg-red-500 hover:bg-red-600 text-white border-none rounded-xl">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {cart.length > 0 && (
      <div className="bg-white mt-10 rounded-3xl shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              Total Items: {cart.length}
            </h2>

            <p className="text-gray-500">
              Ready to complete your order?
            </p>
          </div>

          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-[#b6845c]">
              $
              {cart.reduce(
                (total, item) => total + item.price,
                0
              )}
            </h1>

            <button className="btn bg-[#b6845c] hover:bg-[#a3744d] text-white border-none px-8 rounded-xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default Cart;

