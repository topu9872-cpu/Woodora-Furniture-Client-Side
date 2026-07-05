import ProductSort from "./ProductSort";

const ProjuctCatalog = () => {
 
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-2 justify-between ">
        <h1 className="text-4xl font-semibold ">
          Featured
          <span className="text-[#b6845c]">
            Product
            <br />
          </span>
          Catalog
        </h1>

        <p className="opacity-70 md:ml-20 max-w-100">
          Discover our handpicked collection of premium furniture designed to
          bring elegance, comfort, and modern style into your home
        </p>
      </div>
    
    
        <div className="mt-10">
          <ul className="menu menu-horizontal  ">
            <ProductSort />
          </ul>
        </div>
     
    </div>
  );
};

export default ProjuctCatalog;
