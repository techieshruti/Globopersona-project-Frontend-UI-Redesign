import { Grid, List, SlidersHorizontal, TriangleAlert } from "lucide-react";
import React from "react";

const EmailLayoutCards = ({status, connection, title,subtitle, buttons,validity}) => {
  return (
    <div>
      {/* filter */}
      <div className="mx-5 mt-8 p-4 bg-white border border-gray-200 rounded-xl shadow-md flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white w-[420px]">
            <input
              type="text"
              placeholder="Search lists by name, description, or tags..."
              className="outline-none text-sm text-gray-600 w-full"
            />
          </div>

          {/* Status */}
          <select className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white">
            <option>All Status</option>
          </select>

          {/* Filters */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-600">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 text-sm">
            <Grid size={16} />
            Grid
          </button>

          <button className="flex items-center gap-2 text-gray-500 text-sm">
            <List size={16} />
            List
          </button>
        </div>
      </div>

      {/* Email List UI card */}
      <div className="mt-4 ml-4 bg-red-300 p-4">
        {/* top section */}
        <div className="flex gap-4 items-center text-sm">
          <p className="px-4 py-0.5 bg-green-100 rounded-xl">{status}</p>
          <div className="px-2 py-0.5 bg-red-100 flex justify-center items-center gap-1 rounded-xl">
            <TriangleAlert size={18}/>
            {connection}</div>
        </div>

        {/* body */}
        <div className="pt-4 pb-4">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <span className="text-gray-500">{subtitle}</span>
        </div>

        {/* button */}
        <div>
          <button className="bg-blue-50 px-10 py-4 rounded-lg text-xl font-bold mr-2">{buttons[0]}</button>
          <button className="bg-blue-50 px-10 py-4 rounded-lg text-xl font-bold ml-2">{buttons[1]}</button>
        </div>

        {/* footer */}
        <button>{validity}</button>
      </div>
    </div>
  );
};

export default EmailLayoutCards;
