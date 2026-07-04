import React from "react";


const Banner = () => {
  return (
    <div className="relative  top-0"
      style={{
      backgroundImage:"url('/assets/alyssa-hurley-yekIZ4ltv1o-unsplash.jpg')"
    }}>
    <div className="w-11/12  mx-auto py-20 "
  
    >
  
      <div className="text-center space-y-4 mt-10">
        <h1 className="text-5xl font-bold">
          Furniture That Fits Your
        </h1>

        <h2 className="text-4xl font-medium text-[#b6845c]">
          Lifestyle Beautifully
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-center mt-12">
        
     
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Discover our curated collection of furniture designed to
            enhance both the beauty and comfort of your home.
          </p>

          <div className="flex items-center -space-x-3">
            <img
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop"
              alt="Customer"
            />

            <img
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              src="https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?q=80&w=388&auto=format&fit=crop"
              alt="Customer"
            />

            <img
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
              src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=870&auto=format&fit=crop"
              alt="Customer"
            />

            <span className="ml-5 text-sm font-medium text-gray-600">
              Trusted by 13K+ customers
            </span>
          </div>
        </div>

       
        <div className="flex justify-center">
          <img
            src='src\assets\spacejoy-RqO6kwm4tZY-unsplash.jpg'
            alt="Modern Furniture"
            className="w-full max-w-md rounded-full shadow-2xl object-cover"
          />
        </div>

       
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#b6845c]">
              400+
            </h2>
            <p className="text-gray-600">Products</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#b6845c]">
              13K+
            </h2>
            <p className="text-gray-600">Customers</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Banner;