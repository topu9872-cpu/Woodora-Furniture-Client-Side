import React, { useEffect, useState } from "react";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import AllCards from "./AllCards";
import ProductsPagination from "./ProductsPagination";

const SearchProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  useEffect(() => {
    const handleSearch = async () => {
      const searchData = await getProductsSearch(search);
      setProducts(searchData);
      setPage(1);
    };
    handleSearch();
  }, [search]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search your items"
        className="py-2 border px-4 rounded-xl m-5 focus:cursor-auto"
      />
      <AllCards products={currentProducts} />
      {totalPages > 1 && (
        <ProductsPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default SearchProducts;
