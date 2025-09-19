import React from 'react';
import { LuBookOpen, LuDollarSign, LuUsers, LuRefreshCw } from 'react-icons/lu';
import { MdOutlineCancel } from 'react-icons/md';

const stats = [
  {
    title: "Total Bookings",
    value: "1,250",
    change: "+5.4%",
    positive: true,
    icon: <LuBookOpen size={20} />,
  },
  {
    title: "Revenue",
    value: "₹8,50,000",
    change: "+12.8%",
    positive: true,
    icon: <LuDollarSign size={20} />,
  },
  {
    title: "Users",
    value: "5,432",
    change: "+11.01%",
    positive: true,
    icon: <LuUsers size={20} />,
  },
  {
    title: "Cancellations",
    value: "120",
    change: "-9.05%",
    positive: false,
    icon: <MdOutlineCancel size={20} />,
  },
  {
    title: "Refunds",
    value: "₹45,000",
    change: "-3.5%",
    positive: false,
    icon: <LuRefreshCw size={20} />,
  },
];

const DashboardMetrics = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow p-5 flex flex-col justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gray-100 rounded-lg">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          </div>
          <span
            className={`mt-3 text-sm font-medium flex items-center ${
              item.positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;