
import { Outlet, Navigate } from "react-router";
import Sidebar from "./Sidebar";
import { authClient } from "../lib/auth-client";
import { getUsers } from "../../../public/ServerData/ServerData";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [dbUser, setDbUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isPending) return;

    if (!user?.email) {
      setChecking(false);
      return;
    }

    getUsers(user.email)
      .then(setDbUser)
      .finally(() => setChecking(false));
  }, [isPending, user?.email]);

  if (isPending || checking) {
    return <div className="p-6">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (dbUser?.role !== "admin") {
    return <Navigate to="/dashboard/unauthorized" replace />;
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
