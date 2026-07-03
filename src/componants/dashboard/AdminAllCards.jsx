import React from "react";
import { MdOutlineAttachMoney, MdOutlineStar } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import DeleteBtn from "./deleteBtn";

const AdminProductTable = ({ products }) => {
  return (
    <div className="p-4 w-full bg-[#f8f8f8]">
      <div className="overflow-x-auto w-full bg-white rounded-2xl border border-[#ececec] shadow-sm">
        <table className="table w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="border-b border-[#ececec] bg-[#faf8f6] text-[#6b7280] text-xs font-bold uppercase tracking-wider">
              <th className="py-4 px-6 text-left">Product</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Rating</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#ececec]/60 text-sm text-[#1f2937]">
            {products.map((product) => (
              <tr 
                key={product._id} 
                className="hover:bg-[#faf8f6]/50 transition-colors duration-200 group"
              >
                {/* Image & Name */}
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#ececec] bg-[#faf8f6] shrink-0">
                      <img
                        loading="lazy"
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="font-semibold text-[#1f2937] line-clamp-2 max-w-md">
                      {product.name}
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="py-4 px-6 font-bold text-[#1f2937]">
                  <span className="flex items-center gap-0.5">
                    <MdOutlineAttachMoney className="w-4 h-4 text-[#6b7280]" />
                    {product.price}
                  </span>
                </td>

                {/* Rating */}
                <td className="py-4 px-6 font-semibold text-[#6b7280]">
                  <span className="flex items-center gap-1">
                    <MdOutlineStar className="text-[#b6845c] w-4 h-4" />
                    {product.rating}
                  </span>
                </td>

                {/* Custom Branded Buttons */}
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform">
                      <AdminEditProduct product={product} />
                    </div>
                    <div className="inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform">
                      <DeleteBtn product={product} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductTable;