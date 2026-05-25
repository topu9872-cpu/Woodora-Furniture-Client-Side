import React from "react";
import { authClient } from "../lib/auth-client";
import { useNavigate } from "react-router";

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
console.log(user)
  return (
    <div className="min-h-screen flex items-center mt-10  justify-center p-5">
      <div className="w-full card bg-[#e9edc9] max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={user?.image || "https://i.pravatar.cc/150?img=12" }
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

         
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 btn btn-primary py-2 rounded-lg transition">
            Edit Profile
          </button>

          <button onClick={handleLogout} className="flex-1 btn btn-error py-2 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
