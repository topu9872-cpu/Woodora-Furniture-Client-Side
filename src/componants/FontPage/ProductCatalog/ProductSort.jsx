import { useEffect, useState, Suspense } from "react";
import { getProducts } from "../../../../public/ServerData/ServerData";

const ProductSort = () => {
  const [selectedSort, setSelectedSort] = useState("all");
  const [products, setProducts] = useState([]);

  const categories = [
    { id: "all", label: "All" },
    { id: "Living Room", label: "Living Room" },
    { id: "Bedroom", label: "Bedroom" },
    { id: "Office", label: "Office" },
    { id: "Storage", label: "Storage" },
  ];

  useEffect(() => {
    const handleProductData = async () => {
      const ProductsData = await getProducts();
      setProducts(ProductsData);
      console.log(ProductsData)
    };
    handleProductData();
  }, []);

  const filteredProducts =
    selectedSort === "all"
      ? products
      : products.filter((item) => item.category === selectedSort);

  return (
    <div>
      <ul className="flex gap-5 items-center font-bold">
        {categories.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedSort(item.id)}
            className={`cursor-pointer transition ${
              selectedSort === item.id
                ? "text-white bg-[#b6845c] rounded-full  px-2 items-center  "
                : "text-gray-400"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, 8).map((product) => (
          <div
            key={product._id}
            className="aspect-square overflow-hidden rounded-2xl "
          >
            <img
              src={product?.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSort;
