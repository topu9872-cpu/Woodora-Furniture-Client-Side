import React from 'react';
import { NavLink } from 'react-router';

const Services = () => {
  return (
    <div className='bg-zinc-200 flex pb-22 flex-col lg:flex-row gap-10 justify-between mx-auto w-11/12 p-6 rounded-4xl'>
      
      <div className='relative flex justify-center mt-4 lg:block'>
        <img
          src='https://media.istockphoto.com/id/2162184026/photo/young-carpenter-clear-scrap-wood-on-the-chair-in-factory.jpg'
          className='w-full max-w-md rounded-2xl'
        />

        <img
          src='https://plus.unsplash.com/premium_photo-1723629703017-3647fb81d56e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMj4xMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='hidden lg:block w-xl rounded-2xl top-20 left-16 absolute'
        />
      </div>

      <div className='max-w-xl space-y-5'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#ce986c]'>
          Services <span className='text-black'>We Offer</span>
        </h1>

        <div>
          <ul className="menu menu-horizontal flex-wrap items-center font-medium gap-3 sm:gap-5 border-2 px-4 py-2 border-gray-300 bg-gray-100 rounded-full">
            <li>Design</li>
            <li className='text-white bg-[#b6845c] px-2 py-1 rounded-full'>Delivery</li>
            <li>Support</li>
          </ul>

          <p className='opacity-60 mt-6 text-sm sm:text-base'>
            We provide high-quality, modern and reliable solutions tailored to your needs. 
            Our focus is on delivering smooth user experience, clean design, and efficient performance
          </p>

          <ul className='space-y-3 mb-10 my-4'>
            <li className='flex gap-4 opacity-80 text-sm sm:text-base'>
              <span className='text-white bg-[#e0a87a] font-bold px-1.5 rounded-full'>1</span>
              Modern and stylish furniture crafted to match your home perfectly.
            </li>

            <li className='flex gap-4 opacity-70 text-sm sm:text-base'>
              <span className='text-white bg-[#e0a87a] font-bold px-1.5 rounded-full'>2</span>
              Fast and safe delivery right to your doorstep with secure packaging.
            </li>

            <li className='flex gap-4 opacity-70 text-sm sm:text-base'>
              <span className='text-white bg-[#e0a87a] font-bold px-1.5 rounded-full'>3</span>
              Friendly support anytime to help you with orders and issues.
            </li>
          </ul>
          <NavLink to='/products' className=' text-[#e0a87a] text-center  cursor-pointer text-lg font-bold border border-[#e0a87a] rounded-lg px-2 py-1 mt-10'>Get Offer</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;