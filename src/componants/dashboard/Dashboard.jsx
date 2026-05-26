import React, { useEffect, useState } from "react";
import { getProductsSearch } from "../../../public/ServerData/ServerData";
import AdminAllCards from "./AdminAllCards";

const Dashboard = () => {
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

export default Dashboard;
