import React, { useMemo, useState } from "react";
import { getProducts } from "../../../public/ServerData/ServerData";

import { MdOutlineAttachMoney, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";

const Products = () => {
  const [perProducts, setPerProducts] = useState([]);
  useMemo(() => {
    const handleProducts = async () => {
      const products = await getProducts();
      setPerProducts(products);
    };
    handleProducts();
  }, []);
  return (
    <div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
        {perProducts.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            className="card bg-[#edede9] p-4 rounded-3xl"
          >
            <div className="w-full h-50 aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-2xl"
              />
            </div>
            <h1 className="text-lg font-bold">{product.name}</h1>
            <span className="flex justify-between font-semibold font-serif items-center">
              <h4 className="flex items-center">
                <MdOutlineAttachMoney />
                {product.price}
              </h4>
              <h5 className="flex items-center gap-0.5">
                <MdOutlineStar className="text-amber-500" />
                {product.rating}
              </h5>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
