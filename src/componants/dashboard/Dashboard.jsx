import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiBell, 
  FiDollarSign, 
  FiShoppingBag, 
  FiBox, 
  FiUsers, 
  FiActivity 
} from 'react-icons/fi';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';


const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});


// ==========================================
// 1. MOCK DATA OBJECTS (dashboardData.js)
// ==========================================
const kpiData = [
  {
    id: 'revenue',
    title: 'Revenue',
    value: '$248,390.00',
    change: '+14.2%',
    isPositive: true,
    icon: FiDollarSign,
    sparkline: [20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50],
  },
  {
    id: 'orders',
    title: 'Orders',
    value: '4,128',
    change: '+8.4%',
    isPositive: true,
    icon: FiShoppingBag,
    sparkline: [15, 18, 14, 22, 20, 26, 23, 28, 25, 32, 30, 34],
  },
  {
    id: 'products',
    title: 'Products',
    value: '1,420',
    change: '+3.1%',
    isPositive: true,
    icon: FiBox,
    sparkline: [40, 40, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42],
  },
  {
    id: 'customers',
    title: 'Customers',
    value: '8,492',
    change: '+18.7%',
    isPositive: true,
    icon: FiUsers,
    sparkline: [10, 15, 18, 24, 28, 35, 40, 46, 52, 60, 68, 75],
  },
];

const salesData = [
  { name: 'Jan', value: 31000 },
  { name: 'Feb', value: 36000 },
  { name: 'Mar', value: 33000 },
  { name: 'Apr', value: 48000 },
  { name: 'May', value: 45000 },
  { name: 'Jun', value: 59000 },
  { name: 'Jul', value: 64000 },
  { name: 'Aug', value: 61000 },
  { name: 'Sep', value: 72000 },
  { name: 'Oct', value: 70000 },
  { name: 'Nov', value: 85000 },
  { name: 'Dec', value: 94000 },
];

const recentOrders = [
  { id: 1, customer: 'Amelia Vance', email: 'amelia@vance.design', product: 'Bouclé Arc Sofa', amount: '$2,450.00', status: 'Delivered' },
  { id: 2, customer: 'Julian Forrester', email: 'j.forrester@gmail.com', product: 'Solid Walnut Dining Table', amount: '$1,890.00', status: 'Pending' },
  { id: 3, customer: 'Marcus Sterling', email: 'm.sterling@studio.co', product: 'Minimalist Oak Sideboard', amount: '$1,240.00', status: 'Delivered' },
  { id: 4, customer: 'Clara Oswald', email: 'clara.o@outlook.com', product: 'Rattan Accent Chair', amount: '$420.00', status: 'Cancelled' },
  { id: 5, customer: 'David Kim', email: 'kim.david@apple.com', product: 'Travertine Coffee Table', amount: '$950.00', status: 'Delivered' },
];

const activities = [
  { id: 1, title: 'Premium Order Completed', desc: 'Order #WD-8921 processed safely via Stripe', time: '5m ago' },
  { id: 2, title: 'Inventory Ingested', desc: '"Japanese Wabi-Sabi Wardrobe" added to catalog', time: '1h ago' },
  { id: 3, title: 'New Architect Trade Account', desc: 'Studio Studio Co. applied for verification', time: '3h ago' },
  { id: 4, title: 'Fulfillment Completed', desc: 'Order #WD-8917 dispatched via White Glove Delivery', time: '5h ago' },
  { id: 5, title: 'Product Details Modified', desc: 'Pricing parameters synchronized on "Belgian Linen Sofa"', time: '1d ago' },
];

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

function StatsCards() {

 
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {kpiData.map((stat) => {
        const Icon = stat.icon;
        const maxVal = Math.max(...stat.sparkline);
        const minVal = Math.min(...stat.sparkline);
        const points = stat.sparkline
          .map((val, i) => `${(i / (stat.sparkline.length - 1)) * 60},${22 - ((val - minVal) / (maxVal - minVal || 1)) * 18}`)
          .join(' ');

        return (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white p-5 rounded-2xl border border-[#ececec] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent group-hover:bg-[#b6845c] transition-colors duration-300" />
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6b7280] tracking-tight">{stat.title}</span>
              <div className="p-2 rounded-xl bg-[#f8f8f8] text-[#1f2937] group-hover:text-[#b6845c] group-hover:bg-[#b6845c]/5 transition-colors duration-300">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1f2937]">{stat.value}</h3>
                <span className="inline-flex items-center text-[11px] font-bold text-emerald-600 mt-0.5">
                  {stat.change}
                </span>
              </div>

              <div className="w-16 h-6 overflow-visible opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#b6845c"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1f2937] text-white p-3 rounded-xl shadow-xl border border-gray-800 text-xs font-sans">
        <p className="text-gray-400 font-medium mb-0.5 uppercase tracking-wider text-[10px]">{payload[0].payload.name}</p>
        <p className="text-sm font-bold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

function SalesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.1 }}
      className="bg-white p-6 rounded-2xl border border-[#ececec] shadow-sm flex flex-col justify-between h-105"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-[#1f2937]">Sales Overview</h3>
          <p className="text-xs text-[#6b7280] mt-0.5">Annual localized store revenue metrics logs</p>
        </div>
        <div className="text-xs font-semibold text-[#6b7280] bg-[#f8f8f8] border border-[#ececec] px-3 py-1.5 rounded-xl">
          FY 2026
        </div>
      </div>

      <div className="w-full h-full overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 10, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b6845c" stopOpacity={0.06} />
                <stop offset="95%" stopColor="#b6845c" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f3f3" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ececec', strokeWidth: 1 }} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#b6845c" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorSales)"
              activeDot={{ r: 5, strokeWidth: 0, fill: '#b6845c' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function OrdersTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.15 }}
      className="bg-white rounded-2xl border border-[#ececec] shadow-sm overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="p-5 border-b border-[#ececec] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#1f2937]">Recent Orders</h3>
            <p className="text-xs text-[#6b7280] mt-0.5">Latest transactional checkout activity</p>
          </div>
          <button className="text-xs font-semibold text-[#b6845c] hover:text-[#a1724d] transition-colors bg-[#b6845c]/5 px-3 py-1.5 rounded-xl border border-[#b6845c]/10">
            View All
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="border-b border-[#ececec] bg-[#f8f8f8] text-[#6b7280] text-[10px] font-bold uppercase tracking-wider">
                <th className="py-3 px-5 text-left font-semibold">Customer</th>
                <th className="py-3 px-5 text-left font-semibold">Product</th>
                <th className="py-3 px-5 text-left font-semibold">Amount</th>
                <th className="py-3 px-5 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ececec]/60 text-xs text-[#1f2937]">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#f8f8f8]/40 transition-colors duration-200 group">
                  <td className="py-3.5 px-5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1f2937] group-hover:text-[#b6845c] transition-colors">{order.customer}</span>
                      <span className="text-[10px] text-[#6b7280] mt-0.5">{order.email}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-medium text-gray-600">{order.product}</td>
                  <td className="py-3.5 px-5 font-bold text-[#1f2937]">{order.amount}</td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                      order.status === 'Delivered' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' :
                      order.status === 'Pending' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                      'bg-rose-50 border-rose-100 text-rose-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.2 }}
      className="bg-white p-5 rounded-2xl border border-[#ececec] shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#1f2937]">Activity Log</h3>
            <p className="text-xs text-[#6b7280] mt-0.5">Live storefront pipeline updates</p>
          </div>
          <FiActivity className="w-4 h-4 text-[#6b7280]" />
        </div>

        <div className="relative border-l border-[#ececec] ml-2 space-y-4 py-1">
          {activities.map((act) => (
            <div key={act.id} className="relative pl-5 group">
              <div className="absolute -left-1.5 top-1.5 w-2 h-2 rounded-full border border-white bg-[#ececec] group-hover:bg-[#b6845c] transition-colors duration-200" />
              
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs font-bold text-[#1f2937] group-hover:text-[#b6845c] transition-colors duration-200">{act.title}</h4>
                  <span className="text-[9px] text-[#6b7280] font-medium shrink-0 bg-[#f8f8f8] px-1.5 py-0.5 border border-[#ececec] rounded-md">
                    {act.time}
                  </span>
                </div>
                <p className="text-[11px] text-[#6b7280] leading-normal">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN DASHBOARD OVERVIEW COMPONENT
// ==========================================
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#1f2937] p-4 sm:p-6 lg:p-8 space-y-6 antialiased font-sans max-w-420 mx-auto">
      
      {/* HEADER SECTION */}
      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#ececec] shadow-sm"
      >
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1f2937]">Welcome Back, Admin 👋</h1>
          <p className="text-xs text-[#6b7280] mt-0.5">{formattedDate} — Performance overview for Woodora Furniture Store.</p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
          <div className="relative w-full md:w-60 max-w-xs">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FiSearch className="w-3.5 h-3.5" />
            </span>
            <input 
              type="text" 
              placeholder="Search metrics..." 
              className="input input-sm h-9 w-full bg-[#f8f8f8] border-[#ececec] focus:border-[#b6845c] focus:outline-none rounded-xl pl-9 text-xs placeholder-gray-400 font-medium transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-ghost btn-circle h-9 w-9 bg-[#f8f8f8] hover:bg-[#b6845c]/5 text-[#1f2937] hover:text-[#b6845c] border border-[#ececec] transition-colors relative">
              <FiBell className="w-3.5 h-3.5" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#b6845c] rounded-full" />
            </button>
            <div className="avatar">
              <div className="w-9 h-9 rounded-xl border border-[#ececec] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                  alt="Admin profile" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* KPI METRICS CARDS */}
      <StatsCards />

      {/* HERO SALES CHART */}
      <SalesChart />

      {/* LOWER SPLIT LAYOUT DATA LOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <div>
          <ActivityTimeline />
        </div>
      </div>

    </div>
  );
}