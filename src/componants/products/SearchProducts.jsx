import { useEffect, useState } from "react";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import AllCards from "./AllCards";
import ProductsPagination from "./ProductsPagination";

const SearchProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    let active = true;

    const handleSearch = async () => {
      try {
        setLoading(true);
        setError("");

        const searchData = await getProductsSearch(search.trim());

        if (active) {
          setProducts(Array.isArray(searchData) ? searchData : []);
          setPage(1);
        }
      } catch (err) {
        if (active) {
          setProducts([]);
          setError(err.message || "Failed to load products.");
          setPage(1);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    handleSearch();

    return () => {
      active = false;
    };
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
      {loading ? (
        <div className="px-5 py-6 text-sm text-gray-500">Loading products...</div>
      ) : error ? (
        <div className="px-5 py-6 text-sm text-red-600">{error}</div>
      ) : (
        <>
          <AllCards products={currentProducts} />
          {totalPages > 1 && (
            <ProductsPagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchProducts;
