import React from "react";
import { RiUser4Fill } from "react-icons/ri";
import { LuBookOpenText } from "react-icons/lu";
import { HiXCircle } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,250",
      change: "+5.4%",
      positive: true,
      icon: <LuBookOpenText />,
    },
    {
      title: "Revenue",
      value: "₹8,50,000",
      change: "+12.8%",
      positive: true,
      icon: <FaRupeeSign />,
    },
    {
      title: "Users",
      value: "5,432",
      change: "+11.01%",
      positive: true,
      icon: <RiUser4Fill />,
    },
    {
      title: "Cancellations",
      value: "120",
      change: "-9.05%",
      positive: false,
      icon: <HiXCircle />,
    },
    {
      title: "Refunds",
      value: "₹45,000",
      change: "-3.5%",
      positive: false,
      icon: <TbRefresh />,
    },
  ];

  const salesData = [
    { name: "Jan", value: 120 },
    { name: "Feb", value: 360 },
    { name: "Mar", value: 180 },
    { name: "Apr", value: 290 },
    { name: "May", value: 160 },
    { name: "Jun", value: 170 },
    { name: "Jul", value: 280 },
    { name: "Aug", value: 95 },
    { name: "Sep", value: 200 },
    { name: "Oct", value: 340 },
    { name: "Nov", value: 240 },
    { name: "Dec", value: 100 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Metrics Grid */}
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Sales */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Target */}
        <div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-2">Monthly Target</h2>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="absolute w-full h-full -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - 0.7555)}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-bold">75.55%</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You earned ₹3287 today, higher than last month. Keep up the good
            work!
          </p>
          <div className="flex justify-around w-full mt-4 text-sm">
            <div className="text-center">
              <p className="text-gray-500">Target</p>
              <p className="font-semibold text-red-600">₹20K ↓</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Revenue</p>
              <p className="font-semibold text-green-600">₹20K ↑</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Today</p>
              <p className="font-semibold text-green-600">₹20K ↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
