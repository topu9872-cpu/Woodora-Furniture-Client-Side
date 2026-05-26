import { MdOutlineAttachMoney, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";
import { getProductsPost } from "../../../public/ServerData/ServerData";
import { Suspense } from "react";

const AllCards = ({ products }) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            className="card  place-items-center bg-[#edede9] p-4 rounded-3xl"
          >
            <div className="w-full h-50 aspect-square overflow-hidden">
             <Suspense fallback={<p>loding........</p>}>
               <img loading="lazy"
                src={product.image}
                alt={product.name}
                className="object-cover rounded-xl h-50 w-200 hover:scale-105 transition duration-300"
              />
             </Suspense>
            </div>
            <h1 className="text-lg font-bold">{product.name}</h1>
            <span className="flex justify-between space-x-20 font-semibold font-serif items-center">
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

export default AllCards;
