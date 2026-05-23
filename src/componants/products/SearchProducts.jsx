import React, { useEffect, useState } from "react";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import AllCards from "./AllCards";
import ProductsPagination from "./ProductsPagination";

const SearchProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleSearch = async () => {
      const searchData = await getProductsSearch(search);
      setProducts(searchData);
    };
    handleSearch();
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search your items"
        className="py-2 border px-4 rounded-xl m-5 focus:cursor-auto"
      />
      <AllCards products={products} />
      <ProductsPagination />
    </div>
  );
};

export default SearchProducts;
