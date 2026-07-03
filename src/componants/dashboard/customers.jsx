import React, { useEffect, useState } from "react";
import { FiUsers, FiMail, FiCalendar, FiShield, FiTrash2 } from "react-icons/fi";
import { getAllUsers } from "../../../public/ServerData/ServerData";

// Note: To use this component, pass the fetched data down to it.
// Example usage: 


const CustomersTable =() => {
   
     const [customers, setCustomers] = useState([]);
      useEffect(() => {
        const handleCustomers = async () => {
           const customers = await getAllUsers();
          setCustomers(customers);
        };
        handleCustomers();
      }, []);
  return (
    <div className="p-4 w-full bg-[#f8f8f8] min-h-screen">
      {/* Table Header Summary */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#1f2937]">Customers Matrix</h1>
          <p className="text-xs text-[#6b7280] mt-0.5">
            Total Verified Accounts: <span className="font-semibold text-[#1f2937]">{customers.length}</span>
          </p>
        </div>
        <div className="p-2 rounded-xl bg-[#b6845c]/5 border border-[#b6845c]/10 text-[#b6845c]">
          <FiUsers className="w-4 h-4" />
        </div>
      </div>

      {/* Table Frame Container */}
      <div className="overflow-x-auto w-full bg-white rounded-2xl border border-[#ececec] shadow-sm">
        <table className="table w-full border-collapse">
          <thead>
            <tr className="border-b border-[#ececec] bg-[#faf8f6] text-[#6b7280] text-xs font-bold uppercase tracking-wider">
              <th className="py-4 px-6 text-left">Profile / Name</th>
              <th className="py-4 px-6 text-left">Email Address</th>
              <th className="py-4 px-6 text-left">Account Role</th>
              <th className="py-4 px-6 text-left">Joined Date</th>
              <th className="py-4 px-6 text-right">Management</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#ececec]/60 text-sm text-[#1f2937]">
            {customers.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-10 text-center text-xs font-medium text-[#6b7280]">
                  No user records registered inside the database framework.
                </td>
              </tr>
            ) : (
              customers.map((user) => (
                <tr 
                  key={user._id || user.id} 
                  className="hover:bg-[#faf8f6]/50 transition-colors duration-200 group"
                >
                  {/* Avatar & Name */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#ececec] bg-[#faf8f6] text-[#b6845c] flex items-center justify-center font-bold text-xs shrink-0 tracking-wider shadow-inner">
                        {user.image ? (
                          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          user.name ? user.name.substring(0, 2).toUpperCase() : "US"
                        )}
                      </div>
                      <div className="font-semibold text-[#1f2937] group-hover:text-[#b6845c] transition-colors duration-150">
                        {user.name || "Anonymous User"}
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="py-4 px-6 text-[#6b7280] font-medium">
                    <div className="flex items-center gap-2">
                      <FiMail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate max-w-xs">{user.email}</span>
                    </div>
                  </td>

                  {/* Role Badge */}
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${
                      user.role === 'admin' 
                        ? 'bg-[#b6845c]/5 border-[#b6845c]/20 text-[#b6845c]' 
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                    }`}>
                      <FiShield className="w-2.5 h-2.5 shrink-0" />
                      {user.role || 'customer'}
                    </span>
                  </td>

                  {/* Date Created */}
                  <td className="py-4 px-6 text-[#6b7280] text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Jul 4, 2026"}
                    </div>
                  </td>

                  {/* Actions Column matching theme parameters */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => alert(`Modify parameters for: ${user.name}`)}
                        className="btn btn-xs h-8 px-3 bg-white hover:bg-[#b6845c] border border-[#ececec] hover:border-[#b6845c] text-[#6b7280] hover:text-white rounded-xl font-semibold transition-all duration-150 shadow-none normal-case text-xs"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => alert(`Purge operations initiated for ID: ${user._id}`)}
                        className="btn btn-xs h-8 w-8 p-0 bg-white hover:bg-rose-50 border border-[#ececec] hover:border-rose-200 text-gray-400 hover:text-rose-600 rounded-xl transition-all duration-150 shadow-none"
                        title="Delete User Account"
                      >
                        <FiTrash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;