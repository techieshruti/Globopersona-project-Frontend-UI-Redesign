import React from "react";
import Sidebar from "../layout/Sidebar";
import { Bell, Search, ChevronDown, Dot } from "lucide-react";
import PerformanceOverview from "./PerformanceOverview";

const metrics = [
  { value: "47", label: "Campaign" },
  { value: "12.8k", label: "Subscriber" },
  { value: "28.4%", label: "Open Rate", highlight: true },
];


const DashBoard = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-20">
        <div className="pl-8 flex py-6 justify-between items-center">
        {/* Dashboard Content */}
        <div>
          <h1 className="text-3xl font-bold ">Dashboard Overview</h1>
          <div className="flex">
            <p className="text-gray-400 text-sm flex items-center font-semibold">
              Welcome back, <span className="text-gray-700 pl-1">Ravi!</span>
              <span className="w-2 h-2 bg-[#28c99e] rounded-full mx-2"></span>
              <span className=" text-[#28c99e]">All systems operational
</span>
            </p>
          </div>
        </div>

        {/* Top Right Icons */}
        <div className="flex gap-16 items-center ">
          {/* matrics */}
          <div className='flex gap-6 text-gray-600 text-lg bg-[#f2f6fc] py-2 px-6 rounded-2xl'>
  {metrics.map((item, index) => (
    <div
      key={item.label}
      className={`flex flex-col pr-4 items-center ${
        index !== metrics.length - 1 ? "border-r-2 border-gray-200" : ""
      }`}
    >
      <p className={`font-bold ${item.highlight ? "text-[#24b478]" : "text-black"}`}>
        {item.value}
      </p>
      <p className={item.highlight ? "text-[#24b478]" : ""}>
        {item.label}
      </p>
    </div>
  ))}
</div>


          {/* Performance Overview */}
          <div className="flex items-center justify-center gap-6">
            <div className="relative">
              {/* Notification */}
              <Bell />
              <span className="absolute w-5 h-5 bg-red-600 -top-5 -right-4 rounded-full text-white flex items-center justify-center text-xs font-semibold">
                3
              </span>
            </div>
            <Search />
          </div>

          {/* admin login */}
          <div className="flex items-center gap-2 p-2 rounded-lg mr-4">
            <div className="relative">
              <h1 className="px-4 py-2 bg-[#2563eb] rounded-xl text-white font-semibold">
                R
              </h1>
              <span className="absolute w-3 h-3 bg-green-600 border-t-2 border-l-2 -bottom-1 -right-1 rounded-full text-white flex items-center justify-center text-xs font-semibold"></span>
            </div>

            <div className="text-sm">
              <h2 className="font-semibold">Ravi</h2>
              <p className="text-gray-500">Admin</p>
            </div>
            <ChevronDown className="text-gray-500" />
          </div>
        </div>
        
      </div>
      <PerformanceOverview/>
      </div>
    </div>
    
  );
  
};

export default DashBoard;
