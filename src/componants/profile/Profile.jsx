import React from "react";
import { authClient } from "../lib/auth-client";
import { Navigate, useNavigate } from "react-router";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
  const router = useNavigate();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router("/login");
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center mt-10 justify-center p-5">
      <div className="card w-full max-w-md bg-[#e9edc9] shadow-md p-6">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={
              user?.image ||
              "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            }
            alt="user"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold">{user?.name}</h2>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{user?.email}</span>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="text-gray-500">Phone</span>
            {/* requires custom field in Better Auth schema */}
            <span className="font-medium">{user?.phone ?? "—"}</span>
          </div>

          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="text-gray-500">Location</span>
            {/* requires custom field in Better Auth schema */}
            <span className="font-medium">{user?.location ?? "—"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <ProfileEdit user={user} />
          <button
            onClick={handleLogout}
            className="flex-1 btn btn-error text-white font-bold text-lg py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;