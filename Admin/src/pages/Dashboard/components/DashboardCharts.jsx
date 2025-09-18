import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const DashboardCharts = () => {
  return (
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
        <p className="text-sm text-gray-500 mt-2 text-center">
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
  );
};

export default DashboardCharts;