import React from "react";
import { authClient } from "../lib/auth-client";
import { useNavigate } from "react-router";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
const router=useNavigate()
  const handleLogout = async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router("/login");
          },
        },
      });
    };


const {data:session}=authClient.useSession()
const user=session?.user;

  return (
    <div className="min-h-screen flex items-center mt-10  justify-center p-5">
      <div className="w-full card bg-[#e9edc9] max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={user?.image || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" }
            alt="user"
            className="w-24 h-24 rounded-full border-6 shadow-[0_0_10px] border-white object-cover"
          />
            
          <h2 className="mt-4 text-2xl font-bold">{user?.name}</h2>
         
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Email</span>
            <span className="">{user?.email}</span>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Phone</span>
            <span className="">{user?.phone}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span>Location</span>
            <span className="">{user?.location}</span>
          </div>

         
        </div>

        {/* Buttons */}
        <div className="mt-6 mx-6 justify-between flex gap-3">
       <ProfileEdit user={user}/>
          <button onClick={handleLogout} className=" text-white font-bold text-lg btn btn-error py-2 rounded-lg ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
