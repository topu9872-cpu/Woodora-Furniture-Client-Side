import React, { useEffect } from 'react';
import { getProducts } from '../../../public/ServerData/ServerData';

const Projucts = () => {

  useEffect(()=>{
 const handleProducts=async()=>{
const products=await getProducts()
console.log(products)
 }
 handleProducts()
  },[])
  return (
    <div className='mt-20'>
      
Projucts
    </div>
  );
};

export default Projucts;