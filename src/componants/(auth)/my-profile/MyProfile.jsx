import React from 'react';

const MyProfile = () => {
  return (
 
         <div className="min-h-screen flex items-center mt-6  justify-center p-5">
      
      <div className="w-full card bg-[#e9edc9] max-w-md">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img 
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="w-24 h-24 rounded-full border-6 shadow-[0_0_10px] border-white object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold">Mehedi Hasan Topu</h2>
          <p className=" text-sm">Full Stack Web Developer</p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Email</span>
            <span className="">topu@gmail.com</span>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Phone</span>
            <span className="">017XXXXXXXX</span>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Location</span>
            <span className="">Khulna, Bangladesh</span>
          </div>

          
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 btn btn-primary py-2 rounded-lg transition">
            Edit Profile
          </button>

          <button className="flex-1 btn btn-error py-2 rounded-lg transition">
            Logout
          </button>
        </div>
     
    </div>
    </div>
  );
};

export default MyProfile;