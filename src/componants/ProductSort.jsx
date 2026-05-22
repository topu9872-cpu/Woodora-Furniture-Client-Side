import { useEffect, useState } from "react";
import { getProducts } from "../../public/ServerData/ServerData";
const ProductSort = () => {
  const [selectedSort, setSelectedSort] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "living-room", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "office", label: "Office" },
    { id: "storage", label: "Storage" },
  ];

 useEffect(() => {
    const handleProductData = async () => {
      const ProductsData = await getProducts()
      console.log(ProductsData);
    };
    handleProductData();
  }, []);



  return (
    <ul className="flex gap-5 items-center font-bold">
      {categories.map((item) => (
        <li
          key={item.id}
          onClick={() => setSelectedSort(item.id)}
          className={`cursor-pointer transition ${
            selectedSort === item.id ? "text-white bg-[#b6845c] rounded-full  px-2 items-center  " : "text-gray-400"
          }`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ProductSort;