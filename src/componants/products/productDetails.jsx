import React, { useEffect, useState } from "react";
import {
  getProductDetails,
} from "../../../public/ServerData/ServerData";
import {  useParams } from "react-router";
import { MdOutlineAttachMoney, MdOutlineStar } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

 

  useEffect(() => {
    const handleDetails = async () => {
      const detailsData = await getProductDetails(id);
      setDetails(detailsData);
    };
    handleDetails();
  }, [id]);

 

  if (!details)
    return (
      <div className="flex justify-center items-center text-5xl mt-50">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div className="mt-30 bg-[#f5f0eb] w-11/12 mx-auto p-8 lg:p-10 rounded-4xl  shadow-sm">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-1/2">
          <img
            src={details.image}
            alt={details.name}
            className="w-full aspect-square object-cover rounded-3xl"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{details.name}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-3xl font-bold text-[#b6845c]">
              ${details.price}
            </span>

            <span className="badge badge-warning badge-soft">
              ⭐ {details.rating}
            </span>

            <span className="badge badge-success badge-soft">
              {details.stock} In Stock
            </span>
          </div>

          <p className="text-base leading-7 text-gray-500 mb-6">
            {details.description}
          </p>

          <div className="space-y-3 mb-8">
            <p>
              <span className="font-semibold">Brand:</span> {details.brand}
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              {details.category}
            </p>

            <p>
              <span className="font-semibold">Material:</span>{" "}
              {details.material}
            </p>
          </div>

          <div className="flex gap-4">
            

            <button className="btn bg-[#b6845c] text-white border-none hover:bg-[#a3744d]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
