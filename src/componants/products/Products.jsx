
import { getProducts } from "../../../public/ServerData/ServerData";


import SearchProducts from "./SearchProducts";

const Products = () => {
  return (
    <div className="mt-20 w-11/12  mx-auto">
      <div>
        <SearchProducts />
       
      </div>
    </div>
  );
};

export default Products;
