import React, { useState, useEffect } from "react";
import { FiShoppingBag, FiTruck, FiDollarSign, FiClock, FiTrash2, FiEye } from "react-icons/fi";
import { getCartProducts } from "../../../public/ServerData/ServerData";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Handle both function calls and raw object imports safely
        const data = typeof getCartProducts === "function" ? await getCartProducts() : await getCartProducts;
        setOrders(data || []);
      } catch (error) {
        console.error("Error fetching order infrastructure streams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4 w-full bg-[#f8f8f8] min-h-screen">
      {/* Table Header Summary */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#1f2937]">Order Stream</h1>
          <p className="text-xs text-[#6b7280] mt-0.5">
            Active Checkout Requests: <span className="font-semibold text-[#1f2937]">{loading ? "..." : orders.length}</span>
          </p>
        </div>
        <div className="p-2 rounded-xl bg-[#b6845c]/5 border border-[#b6845c]/10 text-[#b6845c]">
          <FiShoppingBag className="w-4 h-4" />
        </div>
      </div>

      {/* Table Frame Container */}
      <div className="overflow-x-auto w-full bg-white rounded-2xl border border-[#ececec] shadow-sm">
        <table className="table w-full border-collapse">
          <thead>
            <tr className="border-b border-[#ececec] bg-[#faf8f6] text-[#6b7280] text-xs font-bold uppercase tracking-wider">
              <th className="py-4 px-6 text-left">Order / Customer</th>
              <th className="py-4 px-6 text-left">Product Details</th>
              <th className="py-4 px-6 text-left">Total Price</th>
              <th className="py-4 px-6 text-left">Fulfillment Status</th>
              <th className="py-4 px-6 text-right">Management</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#ececec]/60 text-sm text-[#1f2937]">
            {loading ? (
              <tr>
                <td colSpan="5" className="py-10 text-center text-xs font-medium text-[#6b7280]">
                  <span className="loading loading-spinner loading-sm text-[#b6845c] mr-2"></span>
                  Synchronizing active database streams...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-10 text-center text-xs font-medium text-[#6b7280]">
                  No dynamic order logs processing inside the system frame.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr 
                  key={order._id || order.id} 
                  className="hover:bg-[#faf8f6]/50 transition-colors duration-200 group"
                >
                  {/* Order ID & Customer Info */}
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#b6845c]">#{order._id?.substring(0, 7) || order.id || "WD-XXXX"}</span>
                      <span className="text-xs text-[#1f2937] font-medium mt-0.5">{order.customerName || order.userEmail || "Guest User"}</span>
                    </div>
                  </td>

                  {/* Product Metadata */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3 max-w-xs sm:max-w-md">
                      {order.productImage || order.image ? (
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#ececec] bg-[#faf8f6] shrink-0">
                          <img src={order.productImage || order.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      ) : null}
                      <div className="truncate">
                        <p className="font-semibold text-[#1f2937] truncate">{order.productName || order.title || "Premium Furniture Piece"}</p>
                        <p className="text-[10px] text-[#6b7280] mt-0.5">Qty: {order.quantity || 1}</p>
                      </div>
                    </div>
                  </td>

                  {/* Price Block */}
                  <td className="py-4 px-6 font-bold text-[#1f2937]">
                    <div className="flex items-center gap-0.5">
                      <FiDollarSign className="w-3.5 h-3.5 text-[#6b7280]" />
                      <span>{order.totalPrice || order.price || "0.00"}</span>
                    </div>
                  </td>

                  {/* Dynamic Custom Status Badges */}
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border ${
                      order.status === 'Delivered' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' :
                      order.status === 'Cancelled' ? 'bg-rose-50 border-rose-100 text-rose-700' :
                      'bg-amber-50 border-amber-100 text-amber-700'
                    }`}>
                      {order.status === 'Delivered' ? <FiTruck className="w-2.5 h-2.5" /> : <FiClock className="w-2.5 h-2.5" />}
                      {order.status || 'Pending'}
                    </span>
                  </td>

                  {/* Operational Management Core */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => alert(`Reviewing breakdown parameters for order ID: ${order._id}`)}
                        className="btn btn-xs h-8 px-3 bg-white hover:bg-[#b6845c] border border-[#ececec] hover:border-[#b6845c] text-[#6b7280] hover:text-white rounded-xl font-semibold transition-all duration-150 shadow-none normal-case text-xs inline-flex items-center gap-1.5"
                      >
                        <FiEye className="w-3.5 h-3.5" />
                        View
                      </button>
                      <button 
                        onClick={() => alert(`Purging order entry record node ID: ${order._id}`)}
                        className="btn btn-xs h-8 w-8 p-0 bg-white hover:bg-rose-50 border border-[#ececec] hover:border-rose-200 text-gray-400 hover:text-rose-600 rounded-xl transition-all duration-150 shadow-none"
                        title="Delete Order Log"
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

export default Orders;