import { NavLink } from "react-router";

const WhyChoose = () => {
  return (
    <div className="w-11/12 my-20 mx-auto">
    

      <div className="flex flex-col lg:flex-row gap-10 lg:space-x-20 mx-auto justify-center items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Why Choose
          <br /> <span className="text-[#b36d34]">?</span>
        </h1>

        <img
          src="https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMj4xMHxwaW5nYWx0fHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full max-w-xl h-auto rounded-4xl"
        />
      </div>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        <div className="card p-6 h-full flex flex-col space-y-2 font-serif bg-[#f2f2f2] rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">
            Premium Quality
          </h2>

          <p>
            We use high-quality materials to build durable and long-lasting
            furniture
          </p>
          <p>Every product is carefully checked for strength and comfort</p>
          <p>We never compromise on quality standards</p>

          <NavLink to='/products' className="mt-auto w-full py-2 rounded-full text-center cursor-pointer bg-[#b36d34] text-white hover:opacity-90 transition">
            Explore Now
          </NavLink>
        </div>

        <div className="card p-6 h-full flex flex-col space-y-2 font-serif bg-[#f2f2f2] rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Modern Design</h2>

          <p>Our furniture is designed with a modern and minimal style</p>
          <p>We focus on making your home look elegant and stylish</p>
          <p>Each piece matches today’s interior trends</p>

          <NavLink to='/products' className="mt-auto w-full py-2 rounded-full text-center cursor-pointer bg-[#b36d34] text-white hover:opacity-90 transition">
            Explore Now
          </NavLink>
        </div>

        <div className="card p-6 h-full flex flex-col space-y-2 font-serif bg-[#f2f2f2] rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">
            Trusted Service
          </h2>

          <p>We ensure fast delivery and safe packaging for every order</p>
          <p>Our support team is always ready to help you anytime</p>
          <p>We aim to give a smooth and reliable experience</p>

           <NavLink to='/products' className="mt-auto w-full py-2 rounded-full text-center cursor-pointer bg-[#b36d34] text-white hover:opacity-90 transition">
            Explore Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
