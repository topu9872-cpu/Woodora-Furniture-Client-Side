import React, { Suspense } from "react";
import { MdOutlineAttachMoney, MdOutlineStar } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import DeleteBtn from "./deleteBtn";

const AdminAllCards = ({ products }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#edede9] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* IMAGE */}
            <div className="w-full h-52 overflow-hidden">
              <img
                loading="lazy"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

           
            <div className="p-4 flex flex-col gap-3 flex-1">
              {/* NAME */}
              <h1 className="text-base font-bold line-clamp-2">
                {product.name}
              </h1>

              {/* PRICE + RATING */}
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-1">
                  <MdOutlineAttachMoney />
                  {product.price}
                </span>

                <span className="flex items-center gap-1">
                  <MdOutlineStar className="text-amber-500" />
                  {product.rating}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="mt-auto flex justify-between">
                <AdminEditProduct product={product} />
                <DeleteBtn product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllCards;