import { useState } from "react";
import AdminAllCards from "./AdminAllCards";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import { useEffect } from "react";


const ControlProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleProducts = async () => {
      const adminProducts = await getProductsSearch();
      setProducts(adminProducts);
    };
    handleProducts();
  }, []);
  return (
    <div className="mt-20 w-11/12 mx-auto">
      
      <AdminAllCards products={products} />
    </div>
  );
};

export default ControlProducts;