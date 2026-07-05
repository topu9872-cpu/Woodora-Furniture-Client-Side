import { useState } from "react";
import AdminAllCards from "./AdminAllCards";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import { useEffect } from "react";


const ControlProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const handleProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const adminProducts = await getProductsSearch();

        if (active) {
          setProducts(Array.isArray(adminProducts) ? adminProducts : []);
        }
      } catch (err) {
        if (active) {
          setProducts([]);
          setError(err.message || "Failed to load products.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    handleProducts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mt-20 w-11/12 mx-auto">
      <AdminAllCards products={products} loading={loading} error={error} />
    </div>
  );
};

export default ControlProducts;